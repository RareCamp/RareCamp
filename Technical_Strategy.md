##Technical Strategy

Our strategy is to:

1.	Build a cloud-native solution leveraging AWS as much as possible. We have a good understanding of the AWS systems and services offered. Building on AWS will help us in having fast development cycles and address a lot of security/reliability/availability concerns without a lot of effort
2.	We’ll leverage serverless technologies wherever applicable to reduce our operational burden as well as to minimize expenditure.

####Development Style
We’ll begin with having single master accounts each for test, pre-prod and production environments. All cloud resources will be managed via cloudformation or terraform to ensure repeatability and infrastructure versioning.

####Access
We have a workspace for every foundation. This workspace, and all projects underneath, should be isolated from all other workspaces in the system and should only be accessible to specific foundations. We’ll leverage Cognito to implement authentication and achieve this level of fine-grained authorization. Users in a foundation will currently have full administrative privileges for that workspace. In future, we can tighten controls further within a workspace by creating additional Cognito user pool groups.

####Encryption
A lot of workflow management data in our systems is confidential and needs to be stored as such. There are other user-managed variables such as notes, files etc. which are free-text and can potentially contain both personal health information (PHI) and personally identifiable information (PII). Storing/managing this data will bring us under the umbrella of HIPAA and the associated regulations. We’ll use a consistent strategy, across verticals, for data encryption in transit and at rest to minimize leakages caused due to unintended usage of data. We’ll use the following principles which dealing with data:

*Data in-transit*: All data in transit will be encrypted using TLS 1.2, or higher. This constraint may be relaxed for data movement within a secure firewall with no access to the internet (a VPC for example). 

*Data at-rest*: All data at rest will be encrypted using server-side encryption. We will use customer-managed KMS keys to ensure we have complete control over key creation and management. We’ll perform envelope encryption for encrypting all data at rest.

#### Initial list of AWS Services used
- API Gateway
- DynamoDB
- Lambda
- S3
- CloudWatch
- Config
- IAM
- Cognito
- SSO
- X-Ray

#### Sample Cloudformation templates

##### Lambda
```
MySampleLamdaFunction:
  Type: AWS::Serverless::Function
  Properties:
    FunctionName: "MySampleLambdaFunction"
    Handler: "<path-to-lambda-handler>"
    Description: "sample lamda definition"
    AssumeRolePolicyDocument: JSON
    AutoPublishAlias: live
    Environment:
      Variables:
        EnvVariable1: "sample-non-PHI/PII-value"
    MemorySize: 256
    ProvisionedConcurrencyConfig:
      ProvisionedConcurrentExecutions: 20      
    Runtime: python3.8
    Timeout: 300
    Tracing: Active
```

##### S3
```
MyS3Bucket:
  Type: AWS::S3::Bucket
  Properties:
    BucketName: !Sub "MyS3Bucket-${AWS:Region}:${AWS:AccountId}"
    BucketEncryption:
      ServerSideEncryptionConfiguration:
        - ServerSideEncryptionByDefault: 
            SSEAlgorithm: "aws:kms"
            KMSMasterKeyID: "KMS-KEY-ARN"
          BucketKeyEnabled: true
    DeletionPolicy: Retain
    VersioningConfiguration: 
      Status: Enabled
```

##### KMS
```
MyKmsKey:
  Type: AWS::KMS::Key
  Properties: 
    Description: "kms key to encrypt stuff in s3"
    Enabled: true
    EnableKeyRotation: true
    KeyPolicy: 
     Version: 2012-10-17
     Statement:
     - Effect: Allow
       Action: "kms:*"
       Principal:
         AWS: !Join [ "", [ "arn:aws:iam::", !Ref "AWS::AccountId", ":root" ] ]
       Resource": "*"
```

##### DynamoDB
```
MyDynamoTable:
  Type: AWS::DynamoDB::Table
  Properties: 
    AttributeDefinitions: 
      - AttributeName: "attribute-name"
        AttributeType: S
    BillingMode: "PAY_PER_REQUEST"
    KeySchema: g
      - AttributeName: "primary-key-name"
        KeyType: HASH
    PointInTimeRecoverySpecification: 
      PointInTimeRecoveryEnabled: true
    SSESpecification: 
      KMSMasterKeyId: "my-sensitive-data-KMS-key"
      SSEEnabled: true
    TableName: "my-table-name"
```

