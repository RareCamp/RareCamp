import 'regenerator-runtime/runtime'
import eventMocks from '@serverless/event-mocks'
import awsLambdaMockContext from 'aws-lambda-mock-context'
import { handler } from './auto-confirm-user'

describe('auto-confirm-user: happy paths ', () => {
  test('Works', async () => {
    const context = awsLambdaMockContext()
    const event = eventMocks(
      'aws:cognitoUserPool',
    )
    await expect(handler(event, context)).resolves.toEqual({
      callerContext: { awsSdkVersion: '1', clientId: 'abc1234' },
      region: 'us-east-1',
      request: { userAttributes: { someAttr: 'someValue' } },
      response: { autoConfirmUser: true, autoVerifyEmail: true },
      triggerSource: 'string',
      userName: 'myNameIsAJ',
      userPoolId: 'abcd123',
      version: 2,
    })
  })
})
