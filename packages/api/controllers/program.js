import shortId from 'shortid'
import Program from '../models/Program'
import { log } from '../utils/logger'

export async function createProgram({
  userId,
  program,
}) {
  if (!userId) throw new Error('userId is required')
  if (!program) throw new Error('program is required')

  const id = shortId.generate()
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
  programId,
  program,
}) {
  const programItem = await Program.update({
    id: programId,
    ...program,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROGRAM_CONTROLLER:PROGRAM_UPDATED', { programItem })

  return programItem.Attributes
}

export async function getProgram({ programId }) {
  const programItem = await Program.get({ id: programId })

  if (!programItem) {
    return null
  }

  return programItem.Item
}

export function scanPrograms() {
  return Program.scan()
}
