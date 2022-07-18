# TaleFactoryMonorepo

This project was generated using [Nx](https://nx.dev).

<div style="display: flex; flex-direction: row; justify-content: center;"><img src="apps/tale-factory-app/src/assets/logo.svg" height="180" width="220" alt="taleFactory-Logo"></div>

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.
These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

-   [Angular](https://angular.io)
    -   `ng add @nrwl/angular`
-   [Nest](https://nestjs.com)
    -   `ng add @nrwl/nest`
-   [Node](https://nodejs.org)
    -   `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Useful commands for Nx

When using Nx, you can create multiple applications and libraries in the same workspace.

Run `ng g @nrwl/angular:app my-app` to generate an application.

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@tale-factory-monorepo/mylib`.

Run `ng serve my-app` for a dev server.

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `ng g component my-component --project=my-app` to generate a new component.

Run `ng build my-app` to build the project.

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
