import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const ProjectTable = new Table({
  name: process.env.PROJECT_TABLE,
  partitionKey: 'programId',
  sortKey: 'projectId',
  DocumentClient: dynamoDbDocumentClient,
})

const Project = new Entity({
  name: 'Project',
  attributes: {
    programId: {
      partitionKey: true,
    },
    projectId: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    status: 'string',
    education: 'list',
    serviceProviders: 'list',
  },
  table: ProjectTable,
})

export default Project
