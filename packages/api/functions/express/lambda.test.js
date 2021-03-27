import 'regenerator-runtime/runtime'
import createEvent from '@serverless/event-mocks'
import { logger } from '../../utils/logger'

logger.level = 'error'

function makeContext() {
  return {
    awsRequestId: 'ef6e0ff0-4d67-11eb-87d2-3192f87a25ff',
  }
}

function createEventWithCognito(service, eventValues) {
  const event = createEvent(
    service,
    eventValues,
  )

  event.requestContext = {
    authorizer: {
      claims: {
        sub: 'userid123',
        email: 'user@example.com',
        'cognito:groups': '',
      },
    },
  }

  return event
}

const {
  handler,
} = require('./lambda')

describe('api: happy paths ', () => {
  test('Get disease', async (done) => {
    const context = makeContext()
    const path = 'diseases/existing-disease'
    const event = createEventWithCognito(
      'aws:apiGateway',
      {
        path: `/${path}`,
        pathParameters: {
          proxy: path,
        },
      },
    )
    const response = await handler(event, context)
    expect(response).toMatchObject({
      body: JSON.stringify({ disease: { diseaseId: 'existing-disease', name: 'Existing disease' } }),
      isBase64Encoded: false,
      multiValueHeaders: {
        'access-control-allow-origin': ['*'],
        'content-length': ['70'],
        'content-type': ['application/json; charset=utf-8'],
        etag: ['W/"46-sJIzOhwjJFkevMddf52QxFC3kgc\"'],
        'x-powered-by': ['Express'],
      },
      statusCode: 200,
    })
    done()
  }, 10000)
})
