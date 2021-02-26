import 'regenerator-runtime/runtime'
import createEvent from '@serverless/event-mocks'
import { logger } from '../../utils/logger'

logger.level = 'error'

function makeContext() {
  return {
    awsRequestId: 'ef6e0ff0-4d67-11eb-87d2-3192f87a25ff',
  }
}

const {
  handler,
} = require('./lambda')

describe('api: happy paths ', () => {
  test('Get disease', async (done) => {
    const context = makeContext()
    const path = 'disease/existing-disease'
    const event = createEvent(
      'aws:apiGateway',
      {
        path: `/${path}`,
        pathParameters: {
          proxy: path,
        },
      },
    )
    const response = await handler(event, context)
    expect(response).toEqual({
      body: JSON.stringify({ disease: { id: 'existing-disease', name: 'Existing disease' } }),
      isBase64Encoded: false,
      multiValueHeaders: {
        'access-control-allow-origin': ['*'],
        'content-length': ['63'],
        'content-type': ['application/json; charset=utf-8'],
        etag: ['W/"3f-QTeT4MNp+LEmtpd/mp+sAjNaEco"'],
        'x-powered-by': ['Express'],
      },
      statusCode: 200,
    })
    done()
  }, 10000)
})
