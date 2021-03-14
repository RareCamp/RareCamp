import express from 'express'
import wrapAsync from '../wrap-async'
import {
  createProgram,
  getProgram,
  updateProgram,
  getPrograms,
} from '../../../controllers/program'
import projectRouter from './project'

const programRouter = express.Router()

programRouter.post('/', wrapAsync(async (req, res) => {
  const { program } = req.body
  const userId = req.cognitoUser.id
  const programItem = await createProgram({ userId, program })

  res.json({ program: programItem })
}))

programRouter.put('/:programId', wrapAsync(async (req, res) => {
  const { programId } = req.params
  const userId = req.cognitoUser.id
  const { program } = req.body
  const programItem = await updateProgram({ userId, programId, program })

  res.json({ program: programItem })
}))

programRouter.get('/', wrapAsync(async (req, res) => {
  const userId = req.cognitoUser.id
  const programs = await getPrograms({ userId })
  const programItems = programs.Items || []
  res.json({ programs: programItems })
}))

programRouter.get('/:programId', wrapAsync(async (req, res) => {
  const { programId } = req.params
  const userId = req.cognitoUser.id
  const program = await getProgram({ userId, programId })

  if (!program) {
    return res
      .status(404)
      .json({})
  }

  return res.json({ program })
}))

// project routes
programRouter.use('/:projectId/tasks', projectRouter)

export default programRouter
