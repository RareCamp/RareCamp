import Project from '../models/Project'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createProject({
  userId,
  programId,
  project,
}) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')
  if (!project) throw new Error('project is required')

  const id = generateId()
  const partitionKey = getPk({ userId, programId })
  const item = {
    ...project,
    programId: partitionKey,
    id,
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

  const partitionKey = getPk({ userId, programId })
  const projectItem = await Project.update({
    ...project,
    programId: partitionKey,
    id: projectId,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROJECT_CONTROLLER:PROJECT_UPDATED', { projectItem })

  return projectItem.Attributes
}

export async function getProject({ userId, programId, projectId }) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')
  if (!projectId) throw new Error('projectId is required')

  const partitionKey = getPk({ userId, programId })
  const projectItem = await Project.get({ programId: partitionKey, id: projectId })

  if (!projectItem) {
    return null
  }

  return projectItem.Item
}

export async function getProjects({ userId, programId }) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')

  const partitionKey = getPk({ userId, programId })
  const projectItems = await Project.query(partitionKey)

  if (!projectItems) {
    return null
  }

  return projectItems.Item
}

function getPk({ userId, programId }) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')

  return `${userId}#${programId}`
}
