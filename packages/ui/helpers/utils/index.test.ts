import { upcase } from './string'

describe('upcase', () => {
  test('upcase a string', () => {
    const final = upcase('check')
    expect(final).toEqual('CHECK')
  })
})
