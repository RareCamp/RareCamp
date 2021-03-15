import express from 'express'
import wrapAsync from '../wrap-async'
import { createWorkspace, getWorkspaceByIdAndUserId, getWorkspaces } from '../../../controllers/workspace'
import BadRequestError from '../../../errors/BadRequestError'
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
  const workspaces = await getWorkspaces({ userId })
  res.json({ workspaces })
}))

workspaceRouter.get('/:workspaceId', wrapAsync(async (req, res) => {
  const userId = req.cognitoUser.id
  const { workspaceId } = req.params
  const workspace = await getWorkspaceByIdAndUserId({ id: workspaceId, userId })
  if (!workspace.Item) throw new BadRequestError('Workspace doesn\'t exist')
  const programs = await scanPrograms(workspaceId)
  res.json({ workspace: { ...workspace.Item, programs: programs.Items } })
}))

export default workspaceRouter
