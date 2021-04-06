# Nodejs typescript REST API template

If you need typescript REST API starter pack for node.js development. You are on
right place.

- **Run in development mode** - we use `ts-node` as a typescript execution environment,
`dot-env` library for setting up environment variables
- **Run tests** there is a predefined way how to run tests with `jest`
- **Build application** - for build is used classic way of `tsc`
- **Run in production mode** - run compiled code

### Basic  scripts

- `yarn`
install dependencies
- `yarn build`
build application
- `yarn dev`
start development mode
- `yarn test`
run tests
- `yarn code:fix`
apply prettier and eslint rules for project
- `yarn start`
start compiled application

### Useful for CI/CD

- `yarn test:cover`
 check code coverage in project
- `yarn code:check`
 checking code style policies by prettier and eslint

### FAQ

**Where can env variables can be set?**

- For setting of env variables is used [dotenv package](https://www.npmjs.com/package/dotenv), there are .env files in `./config` folder

# Folder structure
## TL; DR rules for directory structure
Following file names are recommended:
- index.ts - file with implementation or file with exports
- types.ts - contains all types for the given folder and all subfolders
- test.ts - contains tests for the given folder
- test-hooks.ts - contains pre-prepared hooks like beforeEach etc. for tests
- schema.ts - contains validation objects for API validation
- types.yml and module.yml - contain api descriptions
- error.ts - error specification

Folders - the name of the folder should express the character of the module, for example:
- modules - contain all modules,
- modules/stats - statistics module
- modules/stats/models - all models related to statistics
- modules/stats/models/stats - specific model
     - contains index.ts
     - may contain test.ts
     - may contain test-hooks.ts

### / (root)
The following types of files are located in the root folder of the project:
- **README.md** contains a basic description of the application and how to run it.
- GIT files
     - **. gitignore**
     -  If pipelines are used, *azure-pipelines.yml*, *gitlab-ci.yml  and others may appear here.
- files for running the application
     - package.json
     - yarn.lock or npm.lock
     - tsconfig.json
- files for setting linter
     - .eslintrc.js
     - .prettierrc
- Node version specification
     - .nvmrc
- in case of using Docker:
     - .dockerignore
     - Dockerfile
     - In case of using other scripts (shell / configuration), it is necessary to create a folder * docker * where these files will be located.
- IDE configuration
     - .editorconfig
     - .npmrc
     - .nvmrc
     - .prettierrc
     - tslint.json
     - Files intended for IDE only (.vscode, .idea) are not uploaded to GIT. Each user can have different IDE settings and if they do not affect the final code, they should not be in the GIT.

### config/
The config folder contains *.env* files that are used to set variables, usually depending on the environment. The primary purpose is to make it easier to work with the project by not having to enter the ENV variables at startup.

### dist/, coverage/, build/
Automatically generated folders.

### lib/
Customized dependencies that for some reason cannot be used in the node_modules framework.

### migrations/
All scripts related to database migrations are generated in this folder.

### scripts/
This folder contains files that are indirectly related to the applications. They are not important to the running of the application as such, but they perform one-time actions important to the running of the application. A typical example is the migration of data from the previous system to the new one, or API publication documentation to external tools.

### src/
All the code needed to run the application is in this folder. The code is divided into several groups, which are further explained below. Directly in the src folder with files ensuring the launch of the application, ie. initialization file (index.ts) and its tests (test.ts) and basic application interface (types.ts) and the like.

#### src/config
Folder for the definition of all configurations. The folder could be separated into more subfolders, i.e. app-config and system-config for scope specialization of config.

#### src/container
The container folder contains a DI containers from which all instances of application services (app subfolder), controllers, repositories, system services (app subfolders), and express instance. Exceptionally, exports are not combined into one final index.ts.

#### src/modules
Modules are logical units that guarantee the operation of the application and solve individual problem domains. In case the rest-api is created in the application, the individual modules are resource endpoint implementation. For example, a modul is defined as `users` or `statistics`, so the application then contains specific modules `users`, and `stats`.

A specific module folder contains files associated with that module. This does not mean that the things of the module are completely closed. The modules can be interconnected. However, the module contains everything related to the domain. Ie. data model (in the models folder), types (types.ts), controllers (in the controllers folder), tests (test.ts), middlewares (middleware folder of the given module), utils ( folder containing utilities for this module) and possibly api documentation or some utilities of the given module. Api documentation is located in yml files and is divided into a file describing data and responses (types.yml) and routes (module.yml).

The controllers are located in the controllers subfolder, where they are further divided. One controller for one route per one subfolder. The folder and method of the controller are named according to the HTTP method and the entity it works with. For example, if the controller deals with the user detail then the folder is called `get-user` and the method in the controller is `getUser`.
In this subfolder is located the file index.ts where is the implementation of the controller itself and the file test.ts which contains the integration tests of the controller. Alternatively, a test.hooks.ts file containing functions before, after, data definition, etc. can be placed here.

#### src/services
The services folder contains various services that are directly linked to the application. Each service has its own and main index.ts file in which the exports of all parts.

#### src/utils
This folder contains utilities that are needed to run the application and there is no library for them. A general utility is a general implementation of caching or some utility for working with strings and other types. However, the utility could also be called a connector of a specific external service that is not directly tied to the application as such (for example, geocode API). Utilities can become packages over time if they are so general that it is possible and required to use them in another project. Each utils package should contain index.ts, which only exports all available objects and types out.