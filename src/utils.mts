import { cityTranslations } from './config/index.mjs';
import type { DateEngine, TimeZoneMetadatum, RawTimeZone, SupportedTimeZone, TimeZoneItem } from "./interfaces.d.ts";

const CONTINENT_ALLOWLIST = [
  'Europe',
  'Asia',
  'America',
  'America/Argentina',
  'Africa',
  'Australia',
  'Pacific',
  'Atlantic',
  'Antarctica',
  'Arctic',
  'Indian',
];

const LABELS_DENYLIST = [
  'Australia/West',
  'Australia/South',
  'America/North_Dakota/Center',
];

const _getDates = (startDate: any, numDays: number, dateEngine: DateEngine) => {
  const dateArray = [];

  let date = dateEngine.create(startDate);

  for (let i = 0; i <= numDays; i++) {
    date = dateEngine.increaseDay(date);
    dateArray.push(dateEngine.format(date));
  }

  return dateArray;
};

const _extractContinent = (label: string) => {
  if (label.indexOf('Istanbul') !== -1) {
    return 'Europe';
  }

  const lastIndex = label.lastIndexOf('/');
  return (lastIndex === -1 ? label : label.slice(0, lastIndex));
}

const _isRegularContinent = (continent: string) => CONTINENT_ALLOWLIST.includes(continent);

export const generateTimeZoneMetadata = (timeZoneItems: TimeZoneItem[], startDate: string, numDays: number, dateEngine: DateEngine): TimeZoneMetadatum[] => {
  const processedDates = new Map<string, any>();
  console.log(`Initializing data starting ${startDate} with ${numDays} days in the future, comparing ${timeZoneItems.length} timezones`);

  const theDates = _getDates(startDate, numDays, dateEngine);

  return timeZoneItems.map((tzItem) => {
    const label = tzItem.label;
    const continent = _extractContinent(label);
    const dates = theDates.map(date => {
      const key = `${date}-${label}`;
      let utc = processedDates.get(key);

      if (utc) {
        return utc;
      }

      utc = dateEngine.tzToUtc(date, label);

      processedDates.set(key, utc);

      return utc;
    });

    return {
      ...tzItem,
      continent,
      isRegularContinent: _isRegularContinent(continent),
      dates,
    }
  });
};

export const compareDateArrs = (arr1: ReturnType<DateEngine["create"]>[], arr2: ReturnType<DateEngine["create"]>[], dateEngine: DateEngine) => arr1.length === arr2.length && arr1.every((value, index) => dateEngine.equal(value, arr2[index]));

const _extractCity = (label: string): string => {
  if (cityTranslations[label]) {
    return cityTranslations[label];
  }

  if (label.indexOf('Etc/') === 0 || LABELS_DENYLIST.includes(label)) {
    return label;
  }

  const lastIndex = label.lastIndexOf('/');
  return (lastIndex === -1 ? label : label.slice(lastIndex + 1)).replace(/[\W_]/g, ' ');
}

export const calculateGroupLabel = (rawTZs: RawTimeZone[], max = 5) => {
  const shrinkedTZs = rawTZs.filter(({ label }) => _isRegularContinent(_extractContinent(label)));
  rawTZs = shrinkedTZs.length === 0 ? [rawTZs[0]] : shrinkedTZs;

  const uniqueLabels = [
    ...new Set(
      rawTZs
        .map(({ label }) => _extractCity(label))
        .filter(_ => !!_)
    )];

  return uniqueLabels
    .slice(0, max)
    .join(', ');
}
