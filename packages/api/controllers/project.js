import shortId from 'shortid'
import Project from '../models/Project'
import { log } from '../utils/logger'

export async function createProject({
  project,
}) {
  if (!project) throw new Error('project is required')

  const id = shortId.generate()
  const item = {
    id,
    ...project,
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

export async function getProject({ projectId }) {
  const projectItem = await Project.get({ id: projectId })

  if (!projectItem) {
    return null
  }

  return projectItem.Item
}
