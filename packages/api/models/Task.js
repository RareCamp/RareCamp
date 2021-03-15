import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const TaskTable = new Table({
  name: process.env.TASK_TABLE,
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
    title: 'string',
    description: 'string',
    status: 'string',
  },
  table: TaskTable,
})

export default Task
