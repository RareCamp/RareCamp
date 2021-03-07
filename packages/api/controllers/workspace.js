import Workspace from '../models/Workspace'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'
import { validateUuid } from '../validations/common'
import { validateWorkspaceDto } from '../validations/workspace'
import { createDisease } from './disease'

export async function createWorkspace({
  userId,
  workspace,
}) {
  validateUuid(userId)
  validateWorkspaceDto(workspace)
  const {
    name,
    description,
    disease,
  } = workspace

  const id = generateId()
  const { id: diseaseId } = await createDisease({ disease })
  const workspaceItem = await Workspace.update({
    userId,
    id,
    diseaseId,
    name,
    description,
  }, { returnValues: 'ALL_NEW' })

  log.info('workspace_CONTROLLER:workspace_CREATED', { workspaceItem })

  return workspaceItem.Attributes
}

export async function getWorkspaces({
  userId,
}) {
  validateUuid(userId)
  const workspaces = await Workspace.scan({ filters: { attr: 'userId', eq: userId } })

  log.info('workspace_CONTROLLER:workspaces_FETCHED', { workspaces })

  return workspaces
}
