import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const ProgramTable = new Table({
  name: process.env.PROGRAM_TABLE,
  // NOTE: partitionKey format is userId#workspaceId
  partitionKey: 'workspaceKey',
  sortKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Program = new Entity({
  name: 'Program',
  attributes: {
    workspaceKey: {
      partitionKey: true,
    },
    id: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    status: 'string',
    diseaseId: 'string',
    education: 'list',
  },
  table: ProgramTable,
})

export default Program
