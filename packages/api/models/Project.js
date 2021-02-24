import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const ProjectTable = new Table({
  name: process.env.PROJECT_TABLE,
  partitionKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Project = new Entity({
  name: 'Project',
  attributes: {
    id: {
      partitionKey: true,
    },
    name: {
      type: 'string',
    },
  },
  table: ProjectTable,
})

export default Project
