import express from 'express'
import wrapAsync from '../wrap-async'
import {
  createWorkspace, getDefaultWorkspace, getWorkspaceByIdAndUserId, getWorkspaces,
} from '../../../controllers/workspace'
import { getPrograms } from '../../../controllers/program'
import { NotFoundError } from '../../../errors'

const workspaceRouter = express.Router()

workspaceRouter.post('/', wrapAsync(async (req, res) => {
  const { workspace } = req.body
  const { userId } = req.cognitoUser
  const workSpaceItem = await createWorkspace({ userId, workspace })

  res.json({ workSpaceItem })
}))

workspaceRouter.get('/', wrapAsync(async (req, res) => {
  const { userId } = req.cognitoUser
  const workSpaces = await getWorkspaces({ userId })

  res.json({ workSpaces })
}))

workspaceRouter.get('/default', wrapAsync(async (req, res) => {
  const { userId } = req.cognitoUser
  const workspace = await getDefaultWorkspace({ userId })
  if (!workspace) throw new NotFoundError('Default workspace does not exist')
  const programs = await getPrograms(workspace.workspaceId)
  if (programs && programs.Items && programs.Items.length) workspace.programs = programs.Items
  res.json({ workspace })
}))

workspaceRouter.get('/:workspaceId', wrapAsync(async (req, res) => {
  const { userId } = req.cognitoUser
  const { workspaceId } = req.params
  const workspace = await getWorkspaceByIdAndUserId({ workspaceId, userId })
  const programs = await getPrograms(workspaceId)
  if (programs && programs.Items && programs.Items.length) workspace.programs = programs.Items
  res.json({ workspace })
}))

export default workspaceRouter
