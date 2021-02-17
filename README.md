## Contributing

To get started, review the following files:

* [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md)
* [CONTRIBUTING](CONTRIBUTING.md)
* [DEVELOPMENT_GUIDE](DEVELOPMENT_GUIDE.md)


## High-level architecture

### UI - Next.js on Amplify

The UI uses Next.js and is deployed on Amplify Console.

### Auth - Cognito

User authentication is provided by AWS Cognito.

### API - Express

A fully-managed and Serverless Express API.

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

Make a copy of the `env.example` file:

```shell
cp env.example .env.development
```

Modify the values in your `.env.development` file. If you're using a shared developer account, you should set `SERVERLESS_SERVICE_SUFFIX=-brett`, ensuring the value you specify is unique and not used by other developers on your team.

Run `npm run deploy:dev` to deploy to your dev account.

To deploy to staging and production manually, you can run `npm run deploy:staging` or `npm run deploy:prod` respectively.
