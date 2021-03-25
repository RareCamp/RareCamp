import Workspace from '../models/Workspace'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'
import { validateUuid } from '../validations/common'
import { validateWorkspaceDto } from '../validations/workspace'

export async function getDefaultWorkspace({ userId }) {
  const workspaces = await getWorkspaces({ userId })
  if (workspaces) return workspaces.Items.find(({ isDefault }) => isDefault)
  return null
}

export async function createWorkspace({
  userId,
  workspace,
}) {
  validateUuid(userId)
  validateWorkspaceDto(workspace)
  const {
    name,
    description,
  } = workspace

  const id = generateId()
  const defaultWorkspace = await getDefaultWorkspace({ userId })
  const doesDefaultWorkspaceExist = Boolean(defaultWorkspace)
  const workspaceItem = await Workspace.update({
    userId,
    id,
    name,
    description,
    isDefault: !doesDefaultWorkspaceExist,
  }, { returnValues: 'ALL_NEW' })

  log.info('workspace_CONTROLLER:workspace_CREATED', { workspaceItem })

  return workspaceItem.Attributes
}

export async function getWorkspaces({
  userId,
}) {
  validateUuid(userId)
  const workspaces = await Workspace.query(userId)

  log.info('workspace_CONTROLLER:workspaces_FETCHED', { workspaces })

  return workspaces
}

export async function getWorkspaceByIdAndUserId({
  id,
  userId,
}) {
  return Workspace.get({ id, userId })
}
