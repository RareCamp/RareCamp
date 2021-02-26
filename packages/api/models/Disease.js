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
    name: 'string',
    abbreviation: 'string',
    omimId: 'string',
    causalGene: 'string',
    mutationImpact: 'string',
    proteinSize: 'number',
    organizationsWorkingOnDisease: 'list',
  },
  table: DiseaseTable,
})

export default Disease
