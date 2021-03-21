import express from 'express'
import wrapAsync from '../wrap-async'
import { createWorkspace, getWorkspaceByIdAndUserId, getWorkspaces } from '../../../controllers/workspace'
import { scanPrograms } from '../../../controllers/program'

const workspaceRouter = express.Router()

workspaceRouter.post('/', wrapAsync(async (req, res) => {
  const { workspace } = req.body
  const userId = req.cognitoUser.id
  const workSpaceItem = await createWorkspace({ userId, workspace })

  res.json({ workSpaceItem })
}))

workspaceRouter.get('/', wrapAsync(async (req, res) => {
  const userId = req.cognitoUser.id
  const workSpaces = await getWorkspaces({ userId })

  res.json({ workSpaces })
}))

workspaceRouter.get('/:workspaceId', wrapAsync(async (req, res) => {
  const userId = req.cognitoUser.id
  const { workspaceId } = req.params
  const workspace = await getWorkspaceByIdAndUserId({ id: workspaceId, userId })
  const programs = await scanPrograms(workspaceId)
  if (programs && programs.Items && programs.Items.length) workspace.programs = programs.Items
  res.json({ workspace })
}))

export default workspaceRouter
