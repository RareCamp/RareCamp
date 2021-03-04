process.env.DISEASE_TABLE = 'DiseaseTable'
process.env.PROGRAM_TABLE = 'ProgramTable'
process.env.PROJECT_TABLE = 'ProjectTable'
process.env.TASK_TABLE = 'TaskTable'
process.env.USER_TABLE = 'UserTable'

module.exports = {
  preset: 'jest-dynalite',
}
