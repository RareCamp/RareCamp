import AWS from 'aws-sdk'
import DynamoDB from 'aws-sdk/clients/dynamodb'

// TODO: v3 https://github.com/deeheber/note-service/pull/4/files
// const { fromIni } = require("@aws-sdk/credential-provider-ini");

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, NODE_ENV } = process.env

// For local development, get creds from ~/.aws/credentials
// Alternatively, set AWS_PROFILE env var
if (NODE_ENV !== 'test' && (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY)) {
  const credentials = new AWS.SharedIniFileCredentials({ profile: 'rarecamp_dev' })
  AWS.config.credentials = credentials
  // TODO: V3
  // const s3Client = new S3.S3Client({
  //   credentials: fromIni({ profile: 'rarecamp_dev' })
  // });
}

const dynamoDbConfig = {
  region: 'us-west-2',
}

if (process.env.MOCK_DYNAMODB_ENDPOINT) {
  dynamoDbConfig.endpoint = process.env.MOCK_DYNAMODB_ENDPOINT
  dynamoDbConfig.sslEnabled = false
  dynamoDbConfig.region = 'local'
}

export const dynamoDbDocumentClient = new DynamoDB.DocumentClient(dynamoDbConfig)
