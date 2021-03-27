import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const TaskTable = new Table({
  name: process.env.TASK_TABLE,
  partitionKey: 'projectId',
  sortKey: 'taskId',
  DocumentClient: dynamoDbDocumentClient,
})

const Task = new Entity({
  name: 'Task',
  attributes: {
    projectId: {
      partitionKey: true,
    },
    taskId: {
      sortKey: true,
    },
    name: 'string',
    description: 'string',
    status: 'string',
    assignees: 'list',
    budget: 'map',
    duration: 'string',
    estimatedStartDate: 'string',
    estimatedEndDate: 'string',
    actualStartDate: 'string',
    actualEndDate: 'string',
    notes: 'list',
    guide: 'string',
    serviceProviders: 'list',
  },
  table: TaskTable,
})

export default Task
