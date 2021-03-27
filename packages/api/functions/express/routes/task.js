import express from 'express'
import wrapAsync from '../wrap-async'
import {
  createTask,
  getTask,
  updateTask,
  getTasks,
} from '../../../controllers/task'

const taskRouter = express.Router({ mergeParams: true })

taskRouter.post('/', wrapAsync(async (req, res) => {
  const { task } = req.body
  const { projectId } = req.params
  const { userId } = req.cognitoUser
  const taskItem = await createTask({ userId, projectId, task })

  res.json({ task: taskItem })
}))

taskRouter.put('/:taskId', wrapAsync(async (req, res) => {
  const { projectId, taskId } = req.params
  const { userId } = req.cognitoUser
  const { task } = req.body
  const taskItem = await updateTask({
    userId, projectId, taskId, task,
  })

  res.json({ task: taskItem })
}))

// Get all Tasks for a given Projectt
taskRouter.get('/', wrapAsync(async (req, res) => {
  const { projectId } = req.params
  const { userId } = req.cognitoUser
  const tasks = await getTasks({ userId, projectId })
  res.json({ tasks })
}))

taskRouter.get('/:taskId', wrapAsync(async (req, res) => {
  const { projectId, taskId } = req.params
  const { userId } = req.cognitoUser
  const task = await getTask({ userId, projectId, taskId })

  if (!task) {
    return res
      .status(404)
      .json({})
  }

  return res.json({ task })
}))

export default taskRouter
