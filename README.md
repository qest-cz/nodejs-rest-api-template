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
