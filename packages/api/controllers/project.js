import Project from '../models/Project'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'
import { NotFoundError } from '../errors'

export async function createProject({
  programId,
  project,
}) {
  if (!programId) throw new Error('programId is required')
  if (!project) throw new Error('project is required')

  const projectId = generateId()
  const item = {
    ...project,
    programId,
    projectId,
  }
  const projectItem = await Project.update(item, { returnValues: 'ALL_NEW' })

  log.info('PROJECT_CONTROLLER:PROJECT_CREATED', { projectItem })

  return projectItem.Attributes
}

export async function updateProject({
  userId,
  programId,
  projectId,
  project,
}) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')
  if (!projectId) throw new Error('projectId is required')
  if (!project) throw new Error('project is required')

  const projectItem = await Project.update({
    ...project,
    programId,
    projectId,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROJECT_CONTROLLER:PROJECT_UPDATED', { projectItem })

  return projectItem.Attributes
}

export async function getProject({ programId, projectId }) {
  if (!programId) throw new Error('programId is required')
  if (!projectId) throw new Error('projectId is required')

  const projectItem = await Project.get({ programId, projectId })

  if (!projectItem) {
    return null
  }

  return projectItem.Item
}

export async function deleteProject({ programId, projectId }) {
  if (!programId) throw new Error('programId is required')
  if (!projectId) throw new Error('projectId is required')

  const projectItem = await Project.get({ programId, projectId })
  if (!projectItem) {
    throw new NotFoundError('project can not be found')
  }
  await Project.delete({ programId, projectId })
}

export async function getProjects({ programId }) {
  if (!programId) throw new Error('programId is required')

  const projectItems = await Project.query(programId)

  if (!projectItems) {
    return null
  }

  return projectItems.Items
}
