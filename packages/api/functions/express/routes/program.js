import express from 'express'
import wrapAsync from '../wrap-async'
import {
  createProgram,
  getProgramWithWorkspace,
  updateProgram,
  getPrograms,
  deleteProgram,
} from '../../../controllers/program'
import { getWorkspaceByIdAndUserId } from '../../../controllers/workspace'
import { NotFoundError } from '../../../errors'

const programRouter = express.Router({ mergeParams: true })

programRouter.post('/', wrapAsync(async (req, res) => {
  const { program } = req.body
  const { workspaceId } = req.params
  const { userId } = req.cognitoUser
  const programItem = await createProgram({ userId, workspaceId, program })

  res.json({ program: programItem })
}))

programRouter.put('/:programId', wrapAsync(async (req, res) => {
  const { userId } = req.cognitoUser
  const { programId, workspaceId } = req.params
  const { program } = req.body
  const programItem = await updateProgram({
    workspaceId, programId, program, userId,
  })

  res.json({ program: programItem })
}))

programRouter.get('/', wrapAsync(async (req, res) => {
  const { workspaceId } = req.params
  const { userId } = req.cognitoUser

  const workspace = getWorkspaceByIdAndUserId({ userId, workspaceId })
  if (!workspace) throw new NotFoundError('Workspaces can not be found')
  const programs = await getPrograms({ workspaceId })
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

programRouter.delete('/:programId', wrapAsync(async (req, res) => {
  const { programId, workspaceId } = req.params
  const { userId } = req.cognitoUser

  const program = await getProgramWithWorkspace({ userId, programId, workspaceId })
  if (!program) throw new NotFoundError('Program can not be found')
  await deleteProgram({ programId, workspaceId })
  return res.json()
}))

export default programRouter
