module.exports = {
  tables: [
    {
      TableName: process.env.DISEASE_TABLE,
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          id: 'existing-disease',
          name: 'Existing disease',
        },
      ],
    },
    {
      TableName: process.env.PROJECT_TABLE,
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          id: 'existing-project',
          name: 'Existing project',
        },
      ],
    },
    {
      TableName: process.env.USER_TABLE,
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          id: 'existing-user',
          name: 'Existing user',
        },
      ],
    },
  ],
  basePort: 8000,
}
