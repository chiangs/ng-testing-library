# Ng8TestingLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

Jest configuration via schematics from: [Jest-Schematic](https://github.com/briebug/jest-schematic) ***Thanks for this!***

Integrated Testing-Library for Angular: [Testing-Library](https://testing-library.com/)

## Storybook

Installed using `npx -p @storybook/cli sb init`

## NgRx

`RootStore` approach that has `FeatureModuleStore`s. [reference](https://wesleygrimes.com/angular/2018/05/30/ngrx-best-practices-for-enterprise-angular-applications.html)

Store: `ng add @ngrx/store`

Store Devtools: `ng add @ngrx/store-devtools`

Effects: `ng add @ngrx/effects`

Entity: `ng add @ngrx/entity`

Setup of FeatureModules: `ng g m featureModuleName/featureModuleName-store --flat false --module root-store/root-store.module.ts`

## Immer

Installed immer and bumped up TS version to 3.7 to simplify the reducer.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/).

Run `npm test -- --watch` to execute test with `--watch` mode on.

Run `npm test -- --coverage` to get a coverage report with tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
