import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { getCurrentInvoke } from '@vendia/serverless-express'
import diseaseRouter from './routes/disease'
import projectRouter from './routes/project'
import programRouter from './routes/program'

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'

const app = express()
const router = express.Router()
// router.use(cookieParser())
router.use(cors())
router.use(bodyParser.json())

router.use((req, res, next) => {
  const { event } = getCurrentInvoke()
  const { claims } = event.requestContext.authorizer
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
app.use('/diseases', diseaseRouter)
app.use('/projects', projectRouter)
app.use('/programs', programRouter)

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

  res
    .status(statusCode)
    .json(response)
})

export default app
