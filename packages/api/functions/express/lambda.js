import 'source-map-support/register'
import serverlessExpress from '@vendia/serverless-express'
import app from './app'

const binaryMimeTypes = []
const server = serverlessExpress.createServer(app, null, binaryMimeTypes)

export const handler = (event, context) => serverlessExpress.proxy(server, event, context)
