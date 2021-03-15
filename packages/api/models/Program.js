import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

// Change: Since program is already linked to user through workspace,
// I removed UserId from program table
const ProgramTable = new Table({
  name: process.env.PROGRAM_TABLE,
  partitionKey: 'workspaceId',
  sortKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Program = new Entity({
  name: 'Program',
  attributes: {
    workspaceId: {
      partitionKey: true,
    },
    id: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    diseaseId: 'string',
    status: 'string',
    education: 'list',
  },
  table: ProgramTable,
})

export default Program
