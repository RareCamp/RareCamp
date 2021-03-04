import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const TaskTable = new Table({
  name: process.env.TASK_TABLE,
  // userId#projectId
  partitionKey: 'projectId',
  sortKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Task = new Entity({
  name: 'Task',
  attributes: {
    projectId: {
      partitionKey: true,
    },
    id: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    status: 'string',
    assignee: 'string',
    budget: 'string',
    duration: 'string',
    estimatedStartDate: 'string',
    estimatedEndDate: 'string',
    actualStartDate: 'string',
    actualEndDate: 'string',
    notes: 'string',
    guide: 'string',
    serviceProviders: 'list',
  },
  table: TaskTable,
})

export default Task
