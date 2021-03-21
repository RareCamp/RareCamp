import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const WorkspaceTable = new Table({
  name: process.env.WORKSPACE_TABLE,
  partitionKey: 'userId',
  sortKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Workspace = new Entity({
  name: 'Workspace',
  attributes: {
    userId: {
      partitionKey: true,
    },
    id: {
      sortKey: true,
    },
    diseaseId: 'string',
    name: 'string',
    description: 'string',
    isDefault: 'boolean',
    programs: 'list',
  },
  table: WorkspaceTable,
})

export default Workspace
