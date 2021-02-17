module.exports = {
  tables: [
    {
      TableName: process.env.DISEASE_TABLE,
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
      data: [
        {
          id: 'existing-disease',
          name: 'Existing disease'
        }
      ],
    },
  ],
  basePort: 8000,
};
