module.exports = (resource, logicalId) => {
  if (resource.Type.startsWith('AWS::DynamoDB::')) return { destination: 'Persistence' }
  if (resource.Type.startsWith('AWS::Amplify::')) return { destination: 'UI' }
  // if (resource.Type.startsWith('AWS::Cognito::')) return { destination: 'Cognito' }
  // if (resource.Type.startsWith('AWS::ApiGateway::')) return { destination: 'API' }
}