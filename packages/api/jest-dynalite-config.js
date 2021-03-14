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
      TableName: process.env.PROGRAM_TABLE,
      KeySchema: [{ AttributeName: 'userId', KeyType: 'HASH' }, { AttributeName: 'id', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'userId', AttributeType: 'S' }, { AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          userId: 'abc123',
          id: 'existing-program',
          name: 'Existing program',
        },
      ],
    },
    {
      TableName: process.env.PROJECT_TABLE,
      KeySchema: [{ AttributeName: 'programKey', KeyType: 'HASH' }, { AttributeName: 'id', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'programKey', AttributeType: 'S' }, { AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          programKey: 'user1#program1',
          id: 'existing-project',
          name: 'Existing project',
        },
      ],
    },
    {
      TableName: process.env.TASK_TABLE,
      KeySchema: [{ AttributeName: 'projectId', KeyType: 'HASH' }, { AttributeName: 'id', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'projectId', AttributeType: 'S' }, { AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          projectId: 'user1#project1',
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
