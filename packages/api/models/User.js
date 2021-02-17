import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const UserTable = new Table({
  name: process.env.USER_TABLE,
  partitionKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const User = new Entity({
  name: 'User',
  attributes: {
    id: { partitionKey: true },
    name: { type: 'string' },
  },
  table: UserTable,
})

export default User
