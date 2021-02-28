import express from 'express'
import wrapAsync from '../wrap-async'
import {
  createProject,
  getProject,
  updateProject,
  scanProjects,
} from '../../../controllers/project'

const projectRouter = express.Router()

projectRouter.post('/', wrapAsync(async (req, res) => {
  const { project } = req.body
  const programId = req.cognitoUser.id
  const projectItem = await createProject({ programId, project })

  res.json({ project: projectItem })
}))

projectRouter.put('/:projectId', wrapAsync(async (req, res) => {
  const { projectId } = req.params
  const { project } = req.body
  const projectItem = await updateProject({ projectId, project })

  res.json({ project: projectItem })
}))

projectRouter.get('/', wrapAsync(async (req, res) => {
  const projects = await scanProjects()
  res.json({ projects })
}))

projectRouter.get('/:projectId', wrapAsync(async (req, res) => {
  const { projectId } = req.params
  const project = await getProject({ projectId })

  if (!project) {
    return res
      .status(404)
      .json({})
  }

  return res.json({ project })
}))

export default projectRouter
