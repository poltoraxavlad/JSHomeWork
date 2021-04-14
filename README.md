# acquisition/NFS-frontend-e2e

## Node
- nvm install node
- nvm use node
- nvm alias default node

## Package manager
- npm install --global yarn or https://yarnpkg.com/en/docs/install
- ng config -g cli.packageManager yarn

- yarn or yarn install --force
- yarn add package or yarn add --dev package
- yarn upgrade package
- yarn remove package

## Translations
- https://github.com/lephyrus/ngx-translate-messageformat-compiler

## E2E

### Install
- cd ./WebstormProjects/ng-app-website/projects/website-e2e
- yarn install
- yarn global add protractor
- webdriver-manager update && webdriver-manager start

### All tests
- protractor protractor.conf.js 
(default url: http://localhost:4200)

### Single test
- protractor protractor.conf.js --specs src/specs/loginLogout.spec.js
(default url: http://localhost:4200)

### All tests via Selenium-Ui
- protractor protractor_circleci.conf.js
(default url: http://localhost:4200) (seleniumAddress: 'http://selenium-ui.dev-blackrockng.com:4444/#/')

### Run by yarn(dev hardcode)
- yarn e2e-dev-jenkins

## TestRail update by test run ID
- cross-env RUN_ID=380 yarn protractor protractor.conf.js
- cross-env RUN_ID=380 yarn protractor protractor_circleci.conf.js


Env variables:
ENV=staging(default)

### Run by Docker 
#### WIN
- docker run -v /$PWD:/project ruslanlizogub/protractor_e2e
#### LINUX
- docker run -v $PWD:/project ruslanlizogub/protractor_e2e
#### local build
- docker build -t test/ui_e2e .
- docker run test/ui_e2e

Env variables:
-e ENV=staging (Default)
-e CONFIG=protractor_circleci.conf.js (Default)

### Allure report
- allure generate

#### Run test for continuous deployment 
- cross-env NFS_DOMAIN=tytytypp4.mtxcapital.com yarn protractor protractor_circleci.conf.js

