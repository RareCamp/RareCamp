import Project from '../models/Project'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createProject({
  programId,
  project,
}) {
  if (!programId) throw new Error('programId is required')
  if (!project) throw new Error('project is required')

  const id = generateId()
  const item = {
    ...project,
    id,
    programId,
  }
  const projectItem = await Project.update(item, { returnValues: 'ALL_NEW' })

  log.info('PROJECT_CONTROLLER:PROJECT_CREATED', { projectItem })

  return projectItem.Attributes
}

export async function updateProject({
  projectId,
  project,
}) {
  const projectItem = await Project.update({
    id: projectId,
    ...project,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROJECT_CONTROLLER:PROJECT_UPDATED', { projectItem })

  return projectItem.Attributes
}

export async function getProject({ programId, projectId }) {
  const projectItem = await Project.get({ programId, id: projectId })

  if (!projectItem) {
    return null
  }

  return projectItem.Item
}

export async function getProjects({ programId }) {
  const projectItems = await Project.query({ programId })

  if (!projectItems) {
    return null
  }

  return projectItems.Item
}

export function scanProjects() {
  return Project.scan()
}
