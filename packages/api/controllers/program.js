import Program from '../models/Program'
import { generateId } from '../utils/id'
import { log } from '../utils/logger'
import { validateProgramDto } from '../validations/program'
import { createDisease } from './disease'
import { DEFAULT_PROJECT, DEFAULT_TASKS } from '../common/constant'
import { createTask, getTasks } from './task'
import NotFoundError from '../errors/NotFoundError'
import { getWorkspaceByIdAndUserId } from './workspace'
import { createProject, getProjects } from './project'

export async function createProgram({
  userId,
  workspaceId,
  program,
}) {
  validateProgramDto({ ...program, workspaceId })
  const {
    disease,
    ...item
  } = program
  item.programId = generateId()
  let diseaseDB = {}
  if (disease) {
    diseaseDB = await createDisease({ disease })
    item.diseaseId = diseaseDB.diseaseId
  }

  const programItem = await Program.update({ ...item, workspaceId }, { returnValues: 'ALL_NEW' })

  const project = await createProject({
    userId,
    programId: item.programId,
    project: DEFAULT_PROJECT,
  })
  project.tasks = await Promise.all(DEFAULT_TASKS.map(async (task) => createTask({
    userId,
    projectId: project.projectId,
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
  workspaceId,
  programId,
  program,
  userId,
}) {
  if (!workspaceId) throw new Error('userId is required')
  if (!programId) throw new Error('programId is required')
  if (!program) throw new Error('program is required')
  const currentProgram = await getProgramWithWorkspace({ workspaceId, userId, programId })
  if (!currentProgram) throw NotFoundError('Program can not be found')
  const programItem = await Program.update({
    ...program,
    workspaceId,
    programId,
  }, { returnValues: 'ALL_NEW' })

  log.info('PROGRAM_CONTROLLER:PROGRAM_UPDATED', { programItem })

  return programItem.Attributes
}

export async function getProgramWithWorkspace({ programId, userId, workspaceId }) {
  const { Item: program } = await Program.get({ workspaceId, programId })
  if (!program) throw new NotFoundError('Program Can not be found')
  const workspace = await getWorkspaceByIdAndUserId({ workspaceId, userId })
  if (!workspace.Item) throw new NotFoundError('Program Can not be found')
  const projects = await getProjects({ programId })
  const tasksList = await Promise.all(projects.map(({ projectId }) => getTasks({ projectId })))
  for (let i = 0; i < tasksList.length; i++) {
    projects[i].tasks = tasksList[i]
  }
  return { ...program, workspace, projects }
}

export function getPrograms(workspaceId) {
  return Program.query(workspaceId)
}

export async function deleteProgram({
  workspaceId,
  programId,
}) {
  const program = await Program.get({ workspaceId, programId })
  if (!program) throw NotFoundError('Program can not be found')
  await Program.delete({ workspaceId, programId })
}
