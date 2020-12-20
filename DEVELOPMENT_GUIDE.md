# Development Guide
Welcome Hacker! Thank you so much for taking the time to contribute to RareCamp. In this document you will find 
useful information to get started developing the project

## Getting Started
We assume you have checked out the source code to your local computer.

1. `cd RareCamp`
1. `npm install`
1. `cp example.env.development .env`
1. Edit the `.env` file to set your username as the value for `SERVERLESS_SERVICE_SUFFIX`.
1. Ensure you have AWS Creditials configured in your local machine. If not, run `aws configure` to configure 
credentials. If you use a different profile to store your config, then set appropriate value to `AWS_PROFILE`  
1. `npm run deploy:personal` - this should deploy the entire stack to your personal AWS account
1. Run this command to get the URL where the website is hosted: `grep -o 'DefaultDomain": "[^"]*' ./stack-outputs.json | grep -o '[^"]*$'`
