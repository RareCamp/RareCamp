# [1.3.0](https://github.com/wizeline/serverless-fullstack/compare/v1.2.2...v1.3.0) (2020-06-26)


### Features

* add cloudformation stacktermination ([#25](https://github.com/wizeline/serverless-fullstack/issues/25)) ([1e47b1a](https://github.com/wizeline/serverless-fullstack/commit/1e47b1a63e68c883f3c24fb49cad4d478f8472f9))

## [1.2.2](https://github.com/wizeline/serverless-fullstack/compare/v1.2.1...v1.2.2) (2020-06-10)


### Bug Fixes

* **dependencies:** update dependencies ([08dd83c](https://github.com/wizeline/serverless-fullstack/commit/08dd83c9d92ed092fe2ce71615bcaf585f5a0694))

## [1.2.1](https://github.com/wizeline/serverless-fullstack/compare/v1.2.0...v1.2.1) (2020-06-10)


### Bug Fixes

* shorten Lambda Fn names to mitigate hitting length limit ([#19](https://github.com/wizeline/serverless-fullstack/issues/19)) ([fea1357](https://github.com/wizeline/serverless-fullstack/commit/fea1357e933c429c96bc6e1364da37cfac95811b))

# [1.2.0](https://github.com/wizeline/serverless-fullstack/compare/v1.1.4...v1.2.0) (2020-06-09)


### Features

* add setup script ([#17](https://github.com/wizeline/serverless-fullstack/issues/17)) ([094edd2](https://github.com/wizeline/serverless-fullstack/commit/094edd2e2223546529a56c2facc1deea87bc5169))

## [1.1.4](https://github.com/wizeline/serverless-fullstack/compare/v1.1.3...v1.1.4) (2020-05-12)


### Bug Fixes

* split GitHub Action Secrets for AWS Creds into DEV, STAGING, and PROD ([cd0482b](https://github.com/wizeline/serverless-fullstack/commit/cd0482b54fbcb554774529f0280c66079f212d87))

## [1.1.3](https://github.com/wizeline/serverless-fullstack/compare/v1.1.2...v1.1.3) (2020-05-08)


### Bug Fixes

* **ci:** add prod aws profile ([46c35af](https://github.com/wizeline/serverless-fullstack/commit/46c35affb437ca0849f643bec958f9a84ed47b4c))

## [1.1.2](https://github.com/wizeline/serverless-fullstack/compare/v1.1.1...v1.1.2) (2020-05-07)


### Bug Fixes

* remove stage-specific .env vars; pass via command during CI instead ([92ed71b](https://github.com/wizeline/serverless-fullstack/commit/92ed71b116f77eb7d8dd828ca61b8c9326953fa2))
* update to latest serverless-amplify-plugin to fix deploying prepacks ([e0b4ac6](https://github.com/wizeline/serverless-fullstack/commit/e0b4ac6037f88a69fb5fb318db18df1bf6f71736))

## [1.1.1](https://github.com/wizeline/serverless-fullstack/compare/v1.1.0...v1.1.1) (2020-05-06)


### Bug Fixes

* shorten cognito lambda functions and add stage-specific .env vars ([6015c68](https://github.com/wizeline/serverless-fullstack/commit/6015c6823bfa1ec33911276a560e185507f9c563))

# [1.1.0](https://github.com/wizeline/serverless-fullstack/compare/v1.0.4...v1.1.0) (2020-05-06)


### Bug Fixes

* PR stack preview and commenting ([#9](https://github.com/wizeline/serverless-fullstack/issues/9)) ([b00cebe](https://github.com/wizeline/serverless-fullstack/commit/b00cebe879fd080ed2ef489e32aa97cc4f4b0aee))
* **ui:** cp-stack-outputs before running build ([b1268f2](https://github.com/wizeline/serverless-fullstack/commit/b1268f2e43335d2caa726914c3e4969d535f4973))
* update dynamodb-toolbox to fix invalid table error ([90bb4e5](https://github.com/wizeline/serverless-fullstack/commit/90bb4e5fd0089495fb95a8169b7b866aa0cc4fe6))
* use SERVERLESS_SERVICE_SUFFIX instead of cli option and rename dev stage to development ([871d3bb](https://github.com/wizeline/serverless-fullstack/commit/871d3bb575370bc3dd32ec3ed4952cb03079cfcd))


### Features

* set AWS_NODEJS_CONNECTION_REUSE_ENABLED for perf boost ([6a2962e](https://github.com/wizeline/serverless-fullstack/commit/6a2962e58c63433a4b6f56bbaeaa7731e4d74ea2))
* use Amplify manual deployments ([f0e8607](https://github.com/wizeline/serverless-fullstack/commit/f0e8607321f4bb8eda672af838c235decbab84fb))
* use stack outputs as env vars for UI build command ([f71be15](https://github.com/wizeline/serverless-fullstack/commit/f71be1508356eab4f3acb42cbcbd4ac883c76e26))

## [1.0.4](https://github.com/wizeline/serverless-nodejs-fullstack/compare/v1.0.3...v1.0.4) (2020-04-29)


### Bug Fixes

* package for prod ([5e4f07a](https://github.com/wizeline/serverless-nodejs-fullstack/commit/5e4f07a8fdc28b27638410d3b45b46c1ea90163e))

## [1.0.3](https://github.com/wizeline/serverless-nodejs-fullstack/compare/v1.0.2...v1.0.3) (2020-04-29)


### Bug Fixes

* fix release.config.js ([10010cd](https://github.com/wizeline/serverless-nodejs-fullstack/commit/10010cd90ceb05ca55b2294f993f1283bd680450))

## [1.0.2](https://github.com/wizeline/serverless-nodejs-fullstack/compare/v1.0.1...v1.0.2) (2020-04-29)


### Bug Fixes

* replace dynamodb with dynamodb-toolbox v0.2 ([267711a](https://github.com/wizeline/serverless-nodejs-fullstack/commit/267711a5c28eb1ebb4007d6e9c3b74140cc0c20f))

## [1.0.1](https://github.com/wizeline/serverless-nodejs-fullstack/compare/v1.0.0...v1.0.1) (2020-04-29)


### Bug Fixes

* add remove-stack:dev script ([#5](https://github.com/wizeline/serverless-nodejs-fullstack/issues/5)) ([6f063ab](https://github.com/wizeline/serverless-nodejs-fullstack/commit/6f063ab6afd86ec11e89b2ae7db740449c20dbcf))

# 1.0.0 (2020-04-28)


### Bug Fixes

* add Authorization header on all HTTP requests when signed in ([aecfbd7](https://github.com/wizeline/serverless-nodejs-fullstack/commit/aecfbd7a8aba1a971914f08df5172b0945108d98))
* allow creating multiple stacks in same account ([e10800b](https://github.com/wizeline/serverless-nodejs-fullstack/commit/e10800be92b1ac12c3da0651a1b3ad754a49a843))
* fix alarms and add stage setting for email notification ([e24fa98](https://github.com/wizeline/serverless-nodejs-fullstack/commit/e24fa98131c272d6119a59f88a28fb275fa49970))


### Features

* add api gateway cognito authorizer ([9707c2d](https://github.com/wizeline/serverless-nodejs-fullstack/commit/9707c2d90fbaceb5eb4d6957d940fe6a35670313))
* add serverless-dotenv-plugin ([eb79e88](https://github.com/wizeline/serverless-nodejs-fullstack/commit/eb79e8865386a1c61bda63a7e2a41f69ef2a60f7))
* add serverless-plugin-aws-alerts ([77f523a](https://github.com/wizeline/serverless-nodejs-fullstack/commit/77f523a78bfd3ad7e6a9d4ee69f17d813813756a))
* separated services ([927511d](https://github.com/wizeline/serverless-nodejs-fullstack/commit/927511dfeb1970f4f5962002a66e64347c1edfdd))
