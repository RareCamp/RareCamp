import 'regenerator-runtime/runtime'
import * as faker from 'faker'
import { validateUuid } from './common'

describe('Test uuid Validation', () => {
  test('Valid userId', () => {
    const userId = faker.random.uuid()
    expect(() => validateUuid(userId)).not.toThrow('invalid data')
  })

  test('Invalid userId', () => {
    const userId = faker.lorem.text()
    expect(() => validateUuid(userId)).toThrow('invalid data')
  })
})
