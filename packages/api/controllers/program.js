import Program from '../models/Program'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'
import { validateUuid } from '../validations/common'
import { validateProgramDto } from '../validations/program'
import BadRequestError from '../errors/BadRequestError'
import { createDisease } from './disease'
import { defaultProject, defaultTasks } from '../common/constant'
import { createTask } from './task'
import NotFoundError from '../errors/NotFoundError'
import { getDefaultWorkspace, getWorkspaceByIdAndUserId } from './workspace'
import { createProject } from './project'

function getPk({ userId, workspaceId }) {
  if (!userId) throw new Error('userId is required')
  if (!workspaceId) throw new Error('workspaceId is required')

  return `${userId}#${workspaceId}`
}

export async function createProgram({
  userId,
  program,
}) {
  validateUuid(userId)
  validateProgramDto(program)

  if (!program.workspaceId) {
    const userDefaultWorkspace = await getDefaultWorkspace(userId)
    if (!userDefaultWorkspace) {
      throw new BadRequestError('workspaceId is required')
    }
    program.workspaceId = getPk({ workspaceId: userDefaultWorkspace.id, userId })
  }
  program.workspaceKey = getPk({ workspaceId: program.workspaceId, userId })

  const {
    disease,
    workspaceId,
    ...item
  } = program
  item.id = generateId()
  let diseaseDB = {}
  if (disease) {
    diseaseDB = await createDisease({ disease })
    item.diseaseId = diseaseDB.id
  }

  const programItem = await Program.update(item, { returnValues: 'ALL_NEW' })

  const project = await createProject({
    userId,
    programId: item.id,
    project: defaultProject,
  })
  project.tasks = await Promise.all(defaultTasks.map((task) => createTask({
    userId,
    projectId: project.id,
    task,
  })))
  log.info('PROGRAM_CONTROLLER:PROGRAM_CREATED', { programItem })

  return {
    ...programItem.Attributes,
    disease: diseaseDB,
    projects: [project],
  }
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

export async function getProgram({ programId, userId }) {
  const programItem = await Program.get({ id: programId })
  if (!programItem) throw new NotFoundError('Program Can not be found')
  const workspace = await getWorkspaceByIdAndUserId({ id: programId.workspaceId, userId })
  if (!workspace) throw new NotFoundError('Program Can not be found')

  return programItem.Item
}

export function scanPrograms(workspaceId) {
  return Program.query(workspaceId)
}
