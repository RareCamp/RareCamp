import Task from '../models/Task'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createTask({
  userId,
  projectId,
  task,
}) {
  const taskId = generateId()
  const item = {
    ...task,
    projectId: `${userId}#${projectId}`,
    id: taskId,
  }
  const taskItem = await Task.update(item, { returnValues: 'ALL_NEW' })

  log.info('TASK_CONTROLLER:TASK_CREATED', { taskItem })

  return taskItem.Attributes
}

export async function updateTask({
  userId,
  projectId,
  taskId,
  task,
}) {
  const taskItem = await Task.update({
    ...task,
    projectId: `${userId}#${projectId}`,
    id: taskId,
  }, { returnValues: 'ALL_NEW' })

  log.info('TASK_CONTROLLER:TASK_UPDATED', { taskItem })

  return taskItem.Attributes
}

export async function getTask({ userId, projectId, taskId }) {
  const taskItem = await Task.get({ projectId: `${userId}#${projectId}`, id: taskId })

  if (!taskItem) {
    return null
  }

  return taskItem.Item
}

export async function getTasks({ userId, projectId }) {
  const taskItems = await Task.query(`${userId}#${projectId}`)

  if (!taskItems) {
    return null
  }

  return taskItems.Item
}
