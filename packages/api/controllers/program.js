import Program from '../models/Program'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createProgram({
  userId,
  program,
}) {
  if (!userId) throw new Error('userId is required')
  if (!program) throw new Error('program is required')

  const id = generateId()
  const item = {
    ...program,
    id,
    userId,
  }
  const programItem = await Program.update(item, { returnValues: 'ALL_NEW' })

  log.info('PROGRAM_CONTROLLER:PROGRAM_CREATED', { programItem })

  return programItem.Attributes
}

export async function updateProgram({
  userId,
  programId,
  program,
}) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')
  if (!program) throw new Error('program is required')

  const programItem = await Program.update({
    ...program,
    userId,
    id: programId,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROGRAM_CONTROLLER:PROGRAM_UPDATED', { programItem })

  return programItem.Attributes
}

export function getPrograms({ userId }) {
  if (!userId) throw new Error('userId is required')

  return Program.query(userId)
}

export async function getProgram({ userId, programId }) {
  if (!userId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')

  const programItem = await Program.get({ userId, id: programId })

  if (!programItem) {
    return null
  }

  return programItem.Item
}
