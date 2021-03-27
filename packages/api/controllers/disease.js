import Disease from '../models/Disease'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createDisease({
  disease,
}) {
  if (!disease) throw new Error('disease is required')
  const diseaseId = generateId()
  const item = {
    diseaseId,
    ...disease,
  }
  const diseaseItem = await Disease.update(item, { returnValues: 'ALL_NEW' })

  log.info('DISEASE_CONTROLLER:DISEASE_CREATED', { diseaseItem })

  return diseaseItem.Attributes
}

export async function updateDisease({
  diseaseId,
  disease,
}) {
  if (!diseaseId) throw new Error('diseaseId is required')
  if (!disease) throw new Error('disease is required')

  const diseaseItem = await Disease.update({
    ...disease,
    diseaseId,
  }, { returnValues: 'ALL_NEW' })

  log.info('DISEASE_CONTROLLER:DISEASE_UPDATED', { diseaseItem })

  return diseaseItem.Attributes
}

export async function getDisease({ diseaseId }) {
  if (!diseaseId) throw new Error('diseaseId is required')

  const diseaseItem = await Disease.get({ diseaseId })

  if (!diseaseItem) {
    return null
  }

  return diseaseItem.Item
}
