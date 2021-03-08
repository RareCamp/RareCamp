import express from 'express'
import wrapAsync from '../wrap-async'
import {
  createProgram,
  getProgram,
  updateProgram,
  scanPrograms,
} from '../../../controllers/program'
import { getProjects } from '../../../controllers/project'

const programRouter = express.Router()

programRouter.post('/', wrapAsync(async (req, res) => {
  const { program } = req.body
  const userId = req.cognitoUser.id
  const programItem = await createProgram({ userId, program })

  res.json({ program: programItem })
}))

programRouter.put('/:programId', wrapAsync(async (req, res) => {
  const { programId } = req.params
  const { program } = req.body
  const programItem = await updateProgram({ programId, program })

  res.json({ program: programItem })
}))

programRouter.get('/', wrapAsync(async (req, res) => {
  const programs = await scanPrograms()
  res.json({ programs })
}))

programRouter.get('/:programId', wrapAsync(async (req, res) => {
  const { programId } = req.params
  const program = await getProgram({ programId })

  if (!program) {
    return res
      .status(404)
      .json({})
  }

  return res.json({ program })
}))

programRouter.get('/:programId/projects', wrapAsync(async (req, res) => {
  const { programId } = req.params
  const program = await getProgram({ programId })

  if (!program) {
    return res
      .status(404)
      .json({})
  }

  const projects = await getProjects({ programId })

  return res.json({ projects })
}))

export default programRouter
