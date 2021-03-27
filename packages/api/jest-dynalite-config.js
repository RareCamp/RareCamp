module.exports = {
  tables: [
    {
      TableName: process.env.DISEASE_TABLE,
      KeySchema: [{ AttributeName: 'diseaseId', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'diseaseId', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          diseaseId: 'existing-disease',
          name: 'Existing disease',
        },
      ],
    },
    {
      TableName: process.env.PROGRAM_TABLE,
      KeySchema: [{ AttributeName: 'workspaceId', KeyType: 'HASH' }, { AttributeName: 'programId', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'workspaceId', AttributeType: 'S' }, { AttributeName: 'programId', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          workspaceId: 'abc123',
          programId: 'existing-program',
          name: 'Existing program',
        },
      ],
    },
    {
      TableName: process.env.PROJECT_TABLE,
      KeySchema: [{ AttributeName: 'programId', KeyType: 'HASH' }, { AttributeName: 'projectId', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'programId', AttributeType: 'S' }, { AttributeName: 'projectId', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          programId: 'program1',
          projectId: 'existing-project',
          name: 'Existing project',
        },
      ],
    },
    {
      TableName: process.env.TASK_TABLE,
      KeySchema: [{ AttributeName: 'projectId', KeyType: 'HASH' }, { AttributeName: 'taskId', KeyType: 'RANGE' }],
      AttributeDefinitions: [{ AttributeName: 'projectId', AttributeType: 'S' }, { AttributeName: 'TaskId', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          projectId: 'project1',
          taskId: 'existing-project',
          name: 'Existing project',
        },
      ],
    },
    {
      TableName: process.env.USER_TABLE,
      KeySchema: [{ AttributeName: 'userId', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'userId', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          userId: 'existing-user',
          name: 'Existing user',
        },
      ],
    },
    {
      TableName: process.env.WORKSPACE_TABLE,
      KeySchema: [{ AttributeName: 'workspaceId', KeyType: 'RANGE' }, { AttributeName: 'userId', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'workspaceId', AttributeType: 'S' }, { AttributeName: 'userId', AttributeType: 'S' }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          workspaceId: 'existing-workspace',
          userId: 'existing-user',
          name: 'Existing workspace',
        },
      ],
    },
  ],
  basePort: 8000,
}
