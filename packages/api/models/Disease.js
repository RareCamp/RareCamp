import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const DiseaseTable = new Table({
  name: process.env.DISEASE_TABLE,
  partitionKey: 'id',
  DocumentClient: dynamoDbDocumentClient,
})

const Disease = new Entity({
  name: 'Disease',
  attributes: {
    id: {
      partitionKey: true,
    },
    discordWebhookUrl: {
      type: 'string',
      required: true,
    },
    players: {
      type: 'map',
    },
    state: {
      type: 'string',
    },
  },
  table: DiseaseTable,
})

export default Disease
