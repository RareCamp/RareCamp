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

export async function getProject({ userId, programId, projectId }) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')
  if (!projectId) throw new Error('projectId is required')

  const projectItem = await Project.get({ programId, projectId })

  if (!projectItem) {
    return null
  }

  return projectItem.Item
}

export async function getProjects({ userId, programId }) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')

  const projectItems = await Project.query(programId)

  if (!projectItems) {
    return null
  }

  return projectItems.Items
}
