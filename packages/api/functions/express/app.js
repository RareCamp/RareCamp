import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { getCurrentInvoke } from '@vendia/serverless-express'
import { StatusCodes } from 'http-status-codes'
import diseaseRouter from './routes/disease'
import programRouter from './routes/program'
import workspaceRouter from './routes/workspace'
import { UnAuthorizedError, UserInputValidationError } from '../../errors'
import { log } from '../../utils/logger'
import profileRouter from './routes/profile'
import BadRequestError from '../../errors/BadRequestError'
import taskRouter from './routes/task'

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const app = express()
const router = express.Router()
// router.use(cookieParser())
router.use(cors())
router.use(bodyParser.json())

router.use((req, res, next) => {
  const { event } = getCurrentInvoke()
  const { claims } = event.requestContext.authorizer
  if (!claims || !claims.sub) throw new UnAuthorizedError()
  const { sub: id, email } = claims
  const groups = claims['cognito:groups']
  req.cognitoUser = {
    id,
    email,
    groups,
  }
  next()
})

app.use('/', router)
app.use('/me', profileRouter)
app.use('/diseases', diseaseRouter)
app.use('/projects/:projectId/tasks', taskRouter)
app.use('/programs', programRouter)
app.use('/workspaces', workspaceRouter)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.statusCode = 404
  next(err)
})

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err
  const response = {
    message: err.message,
  }

  /* istanbul ignore next */
  if (IS_DEVELOPMENT) {
    response.trace = err.stack
  }
  if (err instanceof UserInputValidationError) {
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ errors: err.errors })
  } else if (err instanceof UnAuthorizedError) {
    res.status(StatusCodes.UNAUTHORIZED).json()
  } else if (err instanceof BadRequestError) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: err.message })
  } else {
    res
      .status(statusCode)
      .json(response)
  }
  log.error(`An error occur while processing ${req.method}: ${req.originalUrl} API`, err)
})

export default app
