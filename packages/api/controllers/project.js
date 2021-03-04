import Project from '../models/Project'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createProject({
  userId,
  programId,
  project,
}) {
  const id = generateId()
  const item = {
    ...project,
    programId: `${userId}#${programId}`,
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
  const projectItem = await Project.update({
    ...project,
    programId: `${userId}#${programId}`,
    id: projectId,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROJECT_CONTROLLER:PROJECT_UPDATED', { projectItem })

  return projectItem.Attributes
}

export async function getProject({ userId, programId, projectId }) {
  const projectItem = await Project.get({ programId: `${userId}#${programId}`, id: projectId })

  if (!projectItem) {
    return null
  }

  return projectItem.Item
}

export async function getProjects({ userId, programId }) {
  const projectItems = await Project.query(`${userId}#${programId}`)

  if (!projectItems) {
    return null
  }

  return projectItems.Item
}
