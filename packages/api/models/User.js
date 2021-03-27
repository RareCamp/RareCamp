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
    name: 'string',
    firstName: 'string',
    familyName: 'string',
    organization: 'string',
    workspaces: 'list',
  },
  table: UserTable,
})

export default User
