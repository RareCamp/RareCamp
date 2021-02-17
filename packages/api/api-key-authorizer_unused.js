async function authorizer(event) {
  const apiKey = getApiKey({ event })

  return {
    principalId: 'x-api-key', // Can be any value
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: event.methodArn,
        },
      ],
    },
    usageIdentifierKey: apiKey,
  }
}

function getApiKey({ event }) {
  const { pathParameters, requestContext } = event

  // serverless-offline doesn't include this vaue; need to confirm if a real invoke does
  if (pathParameters && pathParameters.apiKey) return pathParameters.apiKey

  const { resourcePath } = requestContext

  const [, , apiKey] = resourcePath.split('/')

  return apiKey
}

module.exports.authorizer = authorizer
