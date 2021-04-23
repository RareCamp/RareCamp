import { Table, Entity } from 'dynamodb-toolbox'
import { dynamoDbDocumentClient } from '../dynamodb-init'

const DiseaseTable = new Table({
  name: process.env.DISEASE_TABLE,
  partitionKey: 'diseaseId',
  DocumentClient: dynamoDbDocumentClient,
})

const Disease = new Entity({
  name: 'Disease',
  attributes: {
    diseaseId: {
      partitionKey: true,
    },
    name: 'string',
    abbreviation: 'string',
    omimId: 'string',
    causalGene: 'string',
    mutationImpact: 'string',
    proteinSize: 'string',
    organizationsWorkingOnDisease: 'list',
  },
  table: DiseaseTable,
})

export default Disease
