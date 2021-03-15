export const projectStatuses = {
  ONGOING: 'Ongoing',
}
export const taskStatuses = {
  NOT_STARTED: 'Not Started',
}
export const defaultProject = {
  name: 'First Project',
  description: 'My first project',
  status: projectStatuses.ONGOING,
}

export const defaultTasks = [{
  title: 'First task',
  description: 'Expert consultation to identify gaps and create a plan',
  status: taskStatuses.NOT_STARTED,
}, {
  title: 'First task',
  description: 'Expert consultation to identify gaps and create a plan',
  status: taskStatuses.NOT_STARTED,
}]

export const ID_SIZE = 10
