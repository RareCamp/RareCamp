import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const UserTable = new Table({
  name: process.env.USER_TABLE,
  partitionKey: 'userId',
  DocumentClient: dynamoDbDocumentClient,
})

const User = new Entity({
  name: 'User',
  attributes: {
    userId: { partitionKey: true },
    name: 'string',
    firstName: 'string',
    familyName: 'string',
    organization: 'string',
    workspaces: 'list',
  },
  table: UserTable,
})

export default User
