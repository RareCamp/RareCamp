## Pre-requisites

* [AWS CLI](https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html)
* Node.js
* Git
* GitHub Account

## Getting started
To get started, run the following commands:

```
git clone git@github.com:RareCamp/RareCamp.git
cd RareCamp
npm run init
```

Add your AWS credentials as secrets to your GitHub Repository with the following keys:

* `AWS_ACCESS_KEY_ID_DEV`
* `AWS_SECRET_ACCESS_KEY_DEV`
* `AWS_ACCESS_KEY_ID_STAGING`
* `AWS_SECRET_ACCESS_KEY_STAGING`
* `AWS_ACCESS_KEY_ID_PROD`
* `AWS_SECRET_ACCESS_KEY_PROD`

It's advised that development, staging, and production environments exist in separate AWS accounts. However, if you'd prefer to deploy to a single AWS Account for simplicity, you can simply specify the same credentials for each.

Create a GitHub Personal Access Token and add it as a repository secret called `GH_PERSONAL_ACCESS_TOKEN`. This is used to create GitHub releases.

## High-level architecture

### UI - Next.js on Amplify

The UI uses Next.js and is deployed on Amplify Console.

### Auth - Cognito

User authentication is provided by AWS Cognito.

### API - AppSync (GraphQL)

A fully-managed and serverless GraphQl API.

### Database - DynamoDB

...

### Continuous Deployment (CI/CD)

<img src="https://raw.githubusercontent.com/RareCamp/RareCamp/master/docs/diagrams/ci-cd/diagram.png" alt="Continuous Deployment">

GitHub Actions is used to create a Continuous Deployment Pipeline from developer preview, to staging, to production. Each environment is deployed to an isolated AWS Account (optionally, these can be deployed to the same account for simplicity).

Changes are automatically versioned with Semantic Versioning based on git commit messages and immutable release packages created as GitHub relesaes.

### Pull Request Previews

Each PR gets its own stack deployed so that reviewers can see the results for themselves, and end-to-end tests can be run.

### Infrastructure as Code

Serverless Framework is used to provision our infrastruture

### And more...

* CloudWatch Alarms
* Per-function IAM Roles
* REST API Logs in JSON
* Custom Domain Names
* .env support
* Pruning of old Lambda Function Versions
* Lambda Functions optimized with Webpack

## GitHub Actions Continuous Deployments (CI/CD)

<p align="center">
  <img src="https://raw.githubusercontent.com/wizeline/serverless-fullstack/master/docs/diagrams/ci-cd/serverless-fullstack-github-actions-cd.png" alt="serverless-fullstack github actions continous deployment flow diagram">
</p>

## Manual/developer deployments

Make a copy of the `example.env.development` file:

```shell
cp example.env.development .env.development
```

Modify the values in your `.env.development` file. If you're using a shared developer account, you should set `SERVERLESS_SERVICE_SUFFIX=-brett`, ensuring the value you specify is unique and not used by other developers on your team.

Run `npm run deploy:dev` to deploy to your dev account.

To deploy to staging and production manually, you can run `npm run deploy:staging` or `npm run deploy:prod` respectively.

## Developing

After deploying to your developer AWS account, run `npm run start:ui` to run your UI locally against your AWS resources in the cloud.

If you want to run your API locally also, you can run `npm run start:api` and `npm run start:ui:offline` separately.
