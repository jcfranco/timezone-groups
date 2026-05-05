## Changelog

### [1.0.0](https://github.com/jcfranco/timezone-groups.git

/compare/1.0.0...1.0.0) -

#### Chores And Housekeeping

- chore: fix changelog generation/update @JC Franco
- chore: update lock file @JC Franco

## [1.0.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.10.4...1.0.0) - 5 May 2026

- build(deps): bump @rollup/plugin-terser from 0.4.4 to 1.0.0
- build(deps): bump @types/node from 22.10.1 to 25.6.0
- build(deps): bump rimraf from 6.0.1 to 6.1.3
- build(deps): bump @rollup/plugin-commonjs from 28.0.3 to 29.0.2
- build(deps): bump dayjs from 1.11.13 to 1.11.20
- build(deps): move library deps from dev to peer/dep and loosen version constraints
- build(deps): bump date-fns from 3.6.0 to 4.1.0
- build(deps): bump @rollup/plugin-commonjs from 26.0.1 to 28.0.3
- build(deps): bump luxon and @types/luxon
- build(deps): bump typescript from 5.5.4 to 5.8.3
- build(deps): bump @rollup/plugin-node-resolve from 15.3.0 to 16.0.1
- build(deps): bump moment-timezone from 0.5.45 to 0.5.46
- build(deps): bump lint-staged from 15.2.7 to 15.3.0
- build(deps): bump @rollup/plugin-typescript from 12.1.1 to 12.1.2
- build(deps): bump release-it from 17.6.0 to 17.11.0
- build(deps): bump markdownlint-cli from 0.42.0 to 0.43.0
- build(deps): bump prettier from 3.3.3 to 3.4.2
- build(deps): bump xo from 0.59.2 to 0.60.0

#### Chores And Housekeeping

- chore: drop unnecessary countries-and-timezones workaround @JC Franco

#### Refactoring and Updates

- refactor: drop workaround for https://issues.chromium.org/issues/381620359 @JC Franco

#### General Changes

- build(deps): bump release-it deps @JC Franco
- build(deps): bump countries-and-timezones @JC Franco
- build(deps): bump moment-timezone @JC Franco
- Release 1.0.0 @JC Franco
- build!: bump Node to v24 @JC Franco

### [0.10.4](https://github.com/jcfranco/timezone-groups.git

/compare/0.10.3...0.10.4) - 3 December 2024

- docs: update README

#### Fixes

- fix(dayjs): add workaround for https://issues.chromium.org/issues/381620359 @JC Franco

#### General Changes

- Release 0.10.4 @JC Franco

### [0.10.3](https://github.com/jcfranco/timezone-groups.git

/compare/0.10.2...0.10.3) - 3 December 2024

- build(deps): bump dayjs from 1.11.12 to 1.11.13
- build(deps): bump @rollup/plugin-typescript from 11.1.6 to 12.1.1
- build(deps): bump @release-it/conventional-changelog from 8.0.1 to 9.0.3
- build(deps): bump @types/node from 20.14.12 to 22.10.1
- build(deps): bump rollup from 4.19.0 to 4.28.0
- build(deps): bump date-fns-tz from 3.1.3 to 3.2.0
- build(deps): bump @rollup/plugin-node-resolve from 15.2.3 to 15.3.0
- build(deps): bump markdownlint-cli from 0.41.0 to 0.42.0

#### Fixes

- fix: add workaround for https://issues.chromium.org/issues/381620359 @JC Franco

#### General Changes

- Release 0.10.3 @JC Franco

### [0.10.2](https://github.com/jcfranco/timezone-groups.git

/compare/0.10.1...0.10.2) - 23 September 2024

#### General Changes

- Release 0.10.2 @JC Franco

### [0.10.1](https://github.com/jcfranco/timezone-groups.git

/compare/0.10.0...0.10.1) - 23 September 2024

#### Fixes

- fix: handle pending deprecated time zones in `countries-and-timezones` @JC Franco

#### General Changes

- Release 0.10.1 @JC Franco

### [0.10.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.9.1...0.10.0) - 17 September 2024

#### New Features

- feat(groupByRegion)!: include global time zones @JC Franco
- feat: ensure canonical time zones across browsers @JC Franco

#### Chores And Housekeeping

- chore: set up dependabot @JC Franco
- chore: update test page @JC Franco
- chore: update package description @JC Franco

#### General Changes

- refactor!: use `countries-and-timezones` to get country code @JC Franco
- build: update exports to include groupByOffset strategy modules @JC Franco
- build: add minified output @JC Franco
- Release 0.10.0 @JC Franco

### [0.9.1](https://github.com/jcfranco/timezone-groups.git

/compare/0.9.0...0.9.1) - 13 August 2024

#### New Features

- feat: lower Node LTS version to improve compatibility @JC Franco

#### General Changes

- Release 0.9.1 @JC Franco

### [0.9.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.8.0...0.9.0) - 29 July 2024

#### New Features

- feat: add new region group-by option for the JS API @JC Franco

#### Chores And Housekeeping

- chore: type cli params @JC Franco
- chore: drop unused cities module @JC Franco
- chore: use dayjs ESM imports @JC Franco
- chore(package.json): add license field @JC Franco

#### General Changes

- build(deps): bump deps @JC Franco
- refactor!: add separate fns for each group type @JC Franco
- refactor!: drop cli support @JC Franco
- Release 0.9.0 @JC Franco

### [0.8.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.7.0...0.8.0) - 11 October 2023

#### New Features

- feat: include Etc/x time zones for consistent grouping across browsers @JC Franco

#### General Changes

- Release 0.8.0 @JC Franco
- build: update release-it settings @JC Franco

### [0.7.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.6.0...0.7.0) - 6 October 2023

#### Fixes

- fix(native): fix issue in isoToTimeZone logic that would cause incorrect grouping for a few time zones @JC Franco

#### Chores And Housekeeping

- chore: tidy up @JC Franco
- chore: ignore \*iml files @JC Franco

#### Refactoring and Updates

- refactor(native): simplify date creation from ISO date string @JC Franco

#### General Changes

- Release 0.7.0 @JC Franco

### [0.6.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.5.0...0.6.0) - 3 October 2023

#### New Features

- feat: improve browser compatibility by lowering target to ES2020 @JC Franco

#### Fixes

- fix: fix type for custom grouping hooks @JC Franco
- fix: improve browser compat by targeting ES2020 @JC Franco

#### Chores And Housekeeping

- chore: add repository field @JC Franco

#### General Changes

- Release 0.6.0 @JC Franco

### [0.5.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.4.0...0.5.0) - 2 October 2023

#### Fixes

- fix: fix type typo @JC Franco

#### General Changes

- Release 0.5.0 @JC Franco

### [0.4.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.3.0...0.4.0) - 2 October 2023

#### General Changes

- fix!: use .ts as the default file extension to align with package @JC Franco
- Release 0.4.0 @JC Franco

### [0.3.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.2.0...0.3.0) - 2 October 2023

#### Fixes

- fix: hide debug message under flag @JC Franco

#### Documentation Changes

- docs: update changelog @JC Franco

#### General Changes

- fix!: revert providing date engine as string to improve tree-shaking @JC Franco
- Release 0.3.0 @JC Franco

### [0.2.0](https://github.com/jcfranco/timezone-groups.git

/compare/0.1.0...0.2.0) - 28 September 2023

#### New Features

- feat: make specifying engine optional for both Node and browser contexts @JC Franco
- feat: generate types @JC Franco

#### Fixes

- fix: fix package entry points @JC Franco

#### Chores And Housekeeping

- chore: configure release-it to update changelog @JC Franco
- chore: clean up package contents @JC Franco
- chore: add .npmrc @JC Franco

#### Documentation Changes

- docs: add changelog @JC Franco

#### General Changes

- Release 0.2.0 @JC Franco

### 0.1.0

#### New Features

- feat: add support to swap date libs @JC Franco
- feat: add hooks to customize output' @JC Franco
- feat: add support for CLI options @JC Franco
- feat: simplify group interface @JC Franco
- feat: allow passing custom DateEngine @JC Franco
- feat: add debug mode to check generated timezones @JC Franco
- feat: transform label into an array of time zone labels by index @JC Franco
- feat: generate labels that are equally distributed @JC Franco
- feat: use current date as start date when creating groups @JC Franco
- feat: change default interval to boost performance and minimal group change @JC Franco

#### Fixes

- fix: fix native adapter @JC Franco
- fix: fix output filename generation @JC Franco
- fix: ensure label groups are generated equally @JC Franco
- fix: fix package.json bin entry @JC Franco

#### Chores And Housekeeping

- chore: restructure project @JC Franco
- chore: update author/contributors @JC Franco
- chore: fix package name and description @JC Franco
- chore: clean up @JC Franco
- chore: clean up @JC Franco
- chore: tidy up test page @JC Franco

#### Documentation Changes

- docs: update README @JC Franco

#### Refactoring and Updates

- refactor: use flat list of time zones vs partial objects @JC Franco
- refactor: use Intl to generate time zone list @JC Franco
- refactor: tidy up native adapter @JC Franco
- refactor: move date engine loader outside of main modules @JC Franco
- refactor: tweak naming @JC Franco
- refactor: drop lodash in favor of built-in APIs @JC Franco
- refactor: tweak CLI types @JC Franco
- refactor: use slice vs substr (deprecated) @JC Franco
- refactor: reuse existing moment instance vs cloning and modifying during interval calculation @JC Franco

#### Tidying of Code eg Whitespace

- style: tidy up @JC Franco

#### Performance Improvments

- perf: cache processed date-timezones @JC Franco
- perf: improve mapped db computation' @JC Franco

#### General Changes

- build: add release-it @JC Franco
- initial commit @Sebastian Germesin
- build: clean dist before building @JC Franco
- build: focus on MJS output targets for the initial release @JC Franco
- build: tweak output targets @JC Franco
- build: recreate lock file @JC Franco
- build: pin dependencies @JC Franco
- build: fix output targets @JC Franco
- use MIT license @Sebastian Germesin
- Initial commit @Sebastian Germesin
- build: drop unused dep @JC Franco
- build: suppress luxon circular dependency warning @JC Franco
- Update README.md @Sebastian Germesin
- Release 0.1.0 @JC Franco
- build: bump TS target to drop embedded tslib helpers @JC Franco
