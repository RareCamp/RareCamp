import sanitizeHtml from 'sanitize-html'
import AWS from 'aws-sdk'
import Task from '../models/Task'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'
import { getUser } from './user'
import { TASK_STATUSES } from '../common/constant'
import NotFoundError from '../errors/NotFoundError'

AWS.config.update({})

export async function createTask({
  userId,
  projectId,
  task,
}) {
  if (!userId) throw new Error('userId is required')
  if (!projectId) throw new Error('projectId is required')
  if (!task) throw new Error('task is required')
  if (task.notes) task.notes = sanitizeHtml(task.notes)
  const taskId = generateId()
  const item = {
    ...task,
    projectId,
    taskId,
  }
  const { Item: user } = await getUser({ userId })
  item.assignees = [{
    userId: user.userId,
    firstName: user.firstName || user.name,
    lastname: user.lastName,
    thumbnailColor: user.thumbnailColor || '#bbdefb',
  }]
  if (!item.status) item.status = TASK_STATUSES.NOT_STARTED
  if (!item.budget) {
    item.budget = {
      currency: '$',
      amount: null,
      default: 5000,
    }
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
  if (task.notes) task.notes = sanitizeHtml(task.notes)
  const taskItem = await Task.update({
    ...task,
    projectId,
    taskId,
  }, { returnValues: 'ALL_NEW' })

  log.info('TASK_CONTROLLER:TASK_UPDATED', { taskItem })

  return taskItem.Attributes
}

export async function getTask({ projectId, taskId }) {
  if (!projectId) throw new Error('projectId is required')
  if (!taskId) throw new Error('taskId is required')

  const taskItem = await Task.get({ projectId, taskId })

  if (!taskItem) {
    return null
  }

  return taskItem.Item
}

async function populateAssigneeDetails(tasks) {
  if (tasks && tasks.length) {
    for (let i = 0; i < tasks.length; i++) {
      const { assignees } = tasks[i]
      if (assignees && assignees.length) {
        for (let j = 0; j < assignees.length; j++) {
          const { userId } = assignees[j]
          // eslint-disable-next-line no-await-in-loop
          const user = await getUser({ userId })
          if (user) assignees[j] = { ...assignees[j], ...user.Item }
        }
      }
    }
  }
}

export async function getTasks({ projectId }) {
  if (!projectId) throw new Error('projectId is required')

  const taskItems = await Task.query(projectId)
  if (!taskItems) {
    return null
  }
  const tasks = taskItems.Items
  await populateAssigneeDetails(tasks)
  return tasks
}

export async function deleteTask({ projectId, taskId }) {
  if (!projectId) throw new Error('projectId is required')
  if (!taskId) throw new Error('taskId is required')
  const task = await Task.get({ projectId, taskId })
  if (!task) throw NotFoundError('Program can not be found')
  await Task.delete({ projectId, taskId })
}

export async function sendContactSPEmail({
  message, userId, task, spName,
}) {
  const user = await getUser({ userId })
  const ses = new AWS.SES({ apiVersion: '2010-12-01' })
  const params = {
    Destination: {
      ToAddresses: [process.env.CONTACT_SP_EMAIL],
    },
    ConfigurationSetName: process.env.CONFIG_SET_NAME,
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data:
          `
          <html>
            <body>
              <h3>New message from Customer ${user.name} to service provider ${spName}</h3>
              <h3>Message: ${message}</h3>
              <h3>Task Name: ${task.name}, TaskId: ${task.taskId}</h3>
            </body>
          </html>
          `,
        },
        Text: {
          Charset: 'UTF-8',
          Data: `New message from Customer ${user.name} to service provider ${spName}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `New message from Customer ${user.name} to service provider ${spName}`,
      },
    },
    Source: process.env.SOURCE_EMAIL,
  }
  try {
    await ses.sendEmail(params)
      .promise()
  } catch (e) {
    throw new Error('Email Was not sent')
  }
}
