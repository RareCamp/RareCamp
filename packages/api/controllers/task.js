import Task from '../models/Task'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'
import { validateTaskDto } from '../validations/task'

export async function createTask({
  projectId,
  task,
}) {
  validateTaskDto({
    ...task,
    projectId,
  })
  const id = generateId()
  const item = {
    ...task,
    id,
    projectId,
  }
  const projectItem = await Task.update(item, { returnValues: 'ALL_NEW' })

  log.info('PROJECT_CONTROLLER:PROJECT_CREATED', { projectItem })

  return projectItem.Attributes
}
