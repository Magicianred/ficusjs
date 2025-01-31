# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.4.0] - 2021-05-17

### New
- Add `createCustomElement` function for creating components without state
- Add `withLocalState` function for extending components with local state proxy
- Add `withStateMachine` function for extending components with a simple finite state machine
- Add `withXStateService` function for extending components with an XState service instance

### Updates
- Split core functions into `@ficusjs/core` package
- Split state functions into `@ficusjs/state` package
- Split event bus functions into `@ficusjs/event-bus` package
- Update docs - split into separate pages for each section

## [3.3.0] - 2021-04-25

### New
- Add `withLazyRender` function for conditional/lazy rendering of components
- Add `createAppState` and `getAppState` functions for creating fast, lightweight stores for managing application state

### Updates
- Update documentation theme
- Uplift npm packages

### Fixes
- Fix issue with props triggering multiple initial renders

### Deprecated
- Deprecate `createStore` and `getStore` functions - use new `createAppState` and `getAppState` functions instead

## [3.2.3] - 2021-04-10

### Fixes
- Add type of `module` to package.json

## [3.2.2] - 2021-03-30

### Fixes
- Fix `withStyles` function not returning a Promise

## [3.2.1] - 2021-03-04

### Fixes
- Update exports map in package.json

## [3.2.0] - 2021-03-04

### New
- Add `setState` method

### Updates
- `styles` function can accept a string or array of string for CSS styles
- Typescript typings improved
- Documentation updates
- Uplift dev dependencies

## [3.1.2] - 2021-01-11

### Fixes
- Fix constructor issue

## [3.1.1] - 2021-01-11

### Fixes
- Add missing component constructor

## [3.1.0] - 2020-12-02

### New
- Add new `withStyles` composition function for injecting component styles into the document `<head>`

## [3.0.0] - 2020-10-31

### Breaking
- To use modules, they must be invoked with helpers object containing the renderer

## [2.1.0] - 2020-10-29

### Changed
- Updated examples
- Updated docs
- Uplift NPM packages

## [2.0.1] - 2020-10-28

### Fixed
- Updated missing/incorrect docs

## [2.0.0] - 2020-10-11

### Breaking
- Remove store and event binding in components

### New
- Component composition - extend components using functions

## [1.1.0] - 2020-10-01

### New
- Async modules

## [1.0.1] - 2020-09-30

### Fixed
- Missing types

## [1.0.0] - 2020-09-25

- Initial release

## [0.2.0] - 2020-09-23

### Added
- Types for Typescript
- Add event bus and store to components
- Add modules

### Changed
- Updated docs

## [0.1.0] - 2020-09-22

### Added
- Alpha release
