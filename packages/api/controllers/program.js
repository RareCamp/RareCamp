import Program from '../models/Program'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'

export async function createProgram({
  userId,
  program,
}) {
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
  const programItem = await Program.update({
    ...program,
    userId,
    id: programId,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROGRAM_CONTROLLER:PROGRAM_UPDATED', { programItem })

  return programItem.Attributes
}

export function getPrograms({ userId }) {
  return Program.query(userId)
}

export async function getProgram({ userId, programId }) {
  const programItem = await Program.get({ userId, id: programId })

  if (!programItem) {
    return null
  }

  return programItem.Item
}
