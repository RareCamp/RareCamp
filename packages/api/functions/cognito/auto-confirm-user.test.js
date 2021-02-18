import 'regenerator-runtime/runtime'
import eventMocks from '@serverless/event-mocks'
import { handler } from './auto-confirm-user'

describe('auto-confirm-user: happy paths ', () => {
  test('Works', async () => {
    const context = {}
    const event = eventMocks(
      'aws:cognitoUserPool',
      {
        region: 'us-west-2',
      },
    )
    await expect(handler(event, context)).resolves.toEqual({
      callerContext: { awsSdkVersion: '1', clientId: 'abc1234' },
      region: 'us-west-2',
      request: { userAttributes: { someAttr: 'someValue' } },
      response: { autoConfirmUser: true, autoVerifyEmail: true },
      triggerSource: 'string',
      userName: 'myNameIsAJ',
      userPoolId: 'abcd123',
      version: 2,
    })
  })
})
