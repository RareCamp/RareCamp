const { Response, Headers } = jest.requireActual('node-fetch')

const fetch = jest.fn(async () => {
  const meta = {
    'Content-Type': 'application/json',
    Accept: '*/*',
  }
  const headers = new Headers(meta)
  const responseInit = {
    status: 200,
    statusText: '{ message: \'200\' }',
    headers,
  }
  const response = new Response(JSON.stringify({}), responseInit)
  return response
})

module.exports = fetch
