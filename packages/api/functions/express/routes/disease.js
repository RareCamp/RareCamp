import express from 'express'
import wrapAsync from '../wrap-async'
import { createDisease, getDisease, queryOpenDiseases, updateDisease } from '../../../controllers/disease'

const diseaseRouter = express.Router()

diseaseRouter.post('/', wrapAsync(async (req, res) => {
  const { discordWebhookUrl } = req.body

  const disease = await createDisease({ discordWebhookUrl })
  
  res.json(disease)
}))

diseaseRouter.put('/:diseaseId', wrapAsync(async (req, res) => {
  const { diseaseId } = req.params
  const { players } = req.body
  const disease = await updateDisease({ diseaseId, players })

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

diseaseRouter.get('/open-diseases', wrapAsync(async (req, res) => {
  const diseases = await queryOpenDiseases()

  if (!diseases) {
    return res
      .status(404)
      .json({})
  }

  return res.json(diseases)
}))

export default diseaseRouter
