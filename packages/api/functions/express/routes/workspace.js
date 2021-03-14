import express from 'express'
import wrapAsync from '../wrap-async'
import { createWorkspace, getWorkspaces } from '../../../controllers/workspace'

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

export default workspaceRouter
