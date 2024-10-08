export type TimeZoneMetadatum = {
  label: string;
  continent: string;
  isRegularContinent: boolean;
  dates: Array<ReturnType<DateEngine['create']>>;
  visited?: boolean;
};

export type TimeZoneMetadata = TimeZoneMetadatum[];

export type RawTimeZone = {
  label: string;
};

export type IndexLabelGrouping = Grouping & {
  labelIdx: number[];
};

export type LabelGrouping = Grouping & {
  label: string;
};

export type Grouping = {
  tzs: RawTimeZone[];
};

export type TimeZone = string;

export type FinalGrouping = Omit<Grouping, 'tzs'> & {
  tzs?: TimeZone[];
};

export type SupportedTimeZone = string;

export type SupportedDateEngine =
  | 'moment'
  | 'dayjs'
  | 'luxon'
  | 'date-fns'
  | 'native';

export type DateEngine<DateWrapper = any> = {
  readonly name: string;
  create(date: string): DateWrapper;
  increase(date: DateWrapper): DateWrapper;
  formatToIsoDateString(date: DateWrapper): string;
  isoToTimeZone(isoDate: string, timeZone: string): DateWrapper;
  same(date1: DateWrapper, date2: DateWrapper): boolean;
};

export type TimeZoneItem = RawTimeZone;

export type GroupTimeZonesOptions = {
  startDate: string;
  groupDateRange: number;
  dateEngine?: DateEngine;
};
