import Task from '../models/Task'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createTask({
  userId,
  projectId,
  task,
}) {
  if (!userId) throw new Error('userId is required')
  if (!projectId) throw new Error('projectId is required')
  if (!task) throw new Error('task is required')

  const taskId = generateId()
  const partitionKey = getPk({ userId, projectId })
  const item = {
    ...task,
    projectId: partitionKey,
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
  if (!userId) throw new Error('userId is required')
  if (!projectId) throw new Error('projectId is required')
  if (!taskId) throw new Error('taskId is required')
  if (!task) throw new Error('task is required')

  const partitionKey = getPk({ userId, projectId })
  const taskItem = await Task.update({
    ...task,
    projectId: partitionKey,
    id: taskId,
  }, { returnValues: 'ALL_NEW' })

  log.info('TASK_CONTROLLER:TASK_UPDATED', { taskItem })

  return taskItem.Attributes
}

export async function getTask({ userId, projectId, taskId }) {
  if (!userId) throw new Error('userId is required')
  if (!projectId) throw new Error('projectId is required')
  if (!taskId) throw new Error('taskId is required')

  const partitionKey = getPk({ userId, projectId })
  const taskItem = await Task.get({ projectId: partitionKey, id: taskId })

  if (!taskItem) {
    return null
  }

  return taskItem.Item
}

export async function getTasks({ userId, projectId }) {
  if (!userId) throw new Error('userId is required')
  if (!projectId) throw new Error('projectId is required')

  const partitionKey = getPk({ userId, projectId })
  const taskItems = await Task.query(partitionKey)

  if (!taskItems) {
    return null
  }

  return taskItems.Item
}

function getPk({ userId, projectId }) {
  if (!userId) throw new Error('userId is required')
  if (!projectId) throw new Error('projectId is required')

  return `${userId}#${projectId}`
}
