import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const ProjectTable = new Table({
  name: process.env.PROJECT_TABLE,
  // NOTE: partitionKey format is userId#programId
  partitionKey: 'programKey',
  sortKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Project = new Entity({
  name: 'Project',
  attributes: {
    programKey: {
      partitionKey: true,
    },
    id: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    status: 'string',
    education: 'list',
  },
  table: ProjectTable,
})

export default Project
