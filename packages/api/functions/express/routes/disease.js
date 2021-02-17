import express from 'express'
import wrapAsync from '../wrap-async'
import { createDisease, getDisease, queryOpenDiseases, updateDisease } from '../../../controllers/disease'

const diseaseRouter = express.Router()

diseaseRouter.post('/', wrapAsync(async (req, res) => {
  const { disease } = req.body

  const disease = await createDisease({ disease })
  
  res.json(disease)
}))

diseaseRouter.put('/:diseaseId', wrapAsync(async (req, res) => {
  const { diseaseId } = req.params
  const { disease } = req.body
  const disease = await updateDisease({ diseaseId, disease })

  res.json(disease)
}))

diseaseRouter.get('/:diseaseId', wrapAsync(async (req, res) => {
  const { diseaseId } = req.params
  const disease = await getDisease({ diseaseId })

  if (!disease) {
    return res
      .status(404)
      .json({})
  }

  return res.json(disease)
}))

export default diseaseRouter
