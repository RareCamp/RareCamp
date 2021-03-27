import express from 'express'
import wrapAsync from '../wrap-async'
import {
  createProgram,
  getProgramWithWorkspace,
  updateProgram,
  getPrograms,
} from '../../../controllers/program'
import projectRouter from './project'

const programRouter = express.Router({ mergeParams: true })

programRouter.post('/', wrapAsync(async (req, res) => {
  const { program } = req.body
  const { workspaceId } = req.params
  const { userId } = req.cognitoUser
  const programItem = await createProgram({ userId, workspaceId, program })

  res.json({ program: programItem })
}))

programRouter.put('/:programId', wrapAsync(async (req, res) => {
  const { programId, workspaceId } = req.params
  const { program } = req.body
  const programItem = await updateProgram({ workspaceId, programId, program })

  res.json({ program: programItem })
}))

programRouter.get('/', wrapAsync(async (req, res) => {
  const { workspaceId } = req.params

  const programs = await getPrograms(workspaceId)
  const programItems = programs.Items || []
  res.json({ programs: programItems })
}))

programRouter.get('/:programId', wrapAsync(async (req, res) => {
  const { programId, workspaceId } = req.params
  const { userId } = req.cognitoUser
  const program = await getProgramWithWorkspace({ userId, programId, workspaceId })

  if (!program) {
    return res
      .status(404)
      .json({})
  }

  return res.json({ program })
}))

// project routes
// programRouter.use('/:programId/projects', projectRouter)

export default programRouter
