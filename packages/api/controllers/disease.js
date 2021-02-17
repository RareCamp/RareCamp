import shortId from 'shortid'
import Disease from '../models/Disease'
import { log } from '../utils/logger'

export async function createDisease({
  disease,
}) {
  if (!disease) throw new Error('disease is required')

  const id = shortId.generate()
  const item = {
    id,
    ...disease,
  }
  const diseaseItem = await Disease.update(item, { returnValues: 'ALL_NEW'})

  log.info('DISEASE_CONTROLLER:DISEASE_CREATED', { diseaseItem })

  return diseaseItem.Attributes
}

export async function updateDisease({
  diseaseId,
  disease,
}) {
  const diseaseItem = await Disease.update({
    id: diseaseId,
    ...disease,
  }, { returnValues: 'ALL_NEW'})

  log.info('DISEASE_CONTROLLER:DISEASE_UPDATED', { diseaseItem })

  return diseaseItem.Attributes
}

export async function getDisease({ diseaseId }) {
  const diseaseItem = await Disease.get({ id: diseaseId })

  if (!diseaseItem) {
    return null
  }

  return diseaseItem.Item
}