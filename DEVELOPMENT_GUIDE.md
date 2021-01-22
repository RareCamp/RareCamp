# Development Guide
Welcome Hacker! Thank you so much for taking the time to contribute to RareCamp. In this document you will find 
useful information to get started developing the project

## Pre-requisites

Ensure you have the following tools and accounts before beginning:

* [AWS CLI](https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html)
* [Node.js](https://nodejs.org)
* [Git](https://git-scm.com/downloads)
* [GitHub Account](https://github.com/)

## Getting Started

1. Run the following:

    ```bash
    git clone git@github.com:RareCamp/RareCamp.git
    cd RareCamp
    npm run init
    file_contents=$(<.env.example) && echo "${file_contents//SERVERLESS_SERVICE_SUFFIX=/SERVERLESS_SERVICE_SUFFIX=-$USER}" > .env.development
    ```

1. Ensure you have AWS Creditials configured in your local machine. If not, run `aws configure` to configure 
credentials. If you use a different profile to store your config, then update `AWS_PROFILE` in .env.development.
1. Run `npm run deploy:dev` to deploy the entire stack to your AWS account specified in `AWS_PROFILE`
1. Run this command to get the URL where the website is hosted: `grep -o 'DefaultDomain": "[^"]*' ./stack-outputs.json | grep -o '[^"]*$'`


## Developing

Before beginning any work, review [CONTRIBUTING](CONTRIBUTING.md).

After deploying to your developer AWS account, run `npm run start:ui` to run your UI locally against your AWS resources in the cloud.

<!-- If you want to run your API locally also, you can run `npm run start:api` and `npm run start:ui:offline` separately. -->

We're working on improved documentation for development workflow.

## (optional) Configuring GitHub Actions Secrets

To enable CI/CD in GitHub, add your AWS credentials as secrets to your GitHub Repository with the following keys:

* `AWS_ACCESS_KEY_ID_DEV`
* `AWS_SECRET_ACCESS_KEY_DEV`
* `AWS_ACCESS_KEY_ID_STAGING`
* `AWS_SECRET_ACCESS_KEY_STAGING`
* `AWS_ACCESS_KEY_ID_PROD`
* `AWS_SECRET_ACCESS_KEY_PROD`

It's advised that development, staging, and production environments exist in separate AWS accounts. However, if you'd prefer to deploy to a single AWS Account for simplicity, you can simply specify the same credentials for each.

Create a GitHub Personal Access Token and add it as a repository secret called `GH_PERSONAL_ACCESS_TOKEN`. This is used to create GitHub releases.