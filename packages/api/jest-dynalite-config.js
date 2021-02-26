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
      KeySchema: [{ AttributeName: 'userId', KeyType: 'HASH' }, { AttributeName: 'id', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'userId', AttributeType: 'S' }, { AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          userId: 'abc123',
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
