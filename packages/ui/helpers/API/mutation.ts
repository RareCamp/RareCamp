import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { notification } from 'antd'

function updateProgramTask(program, task) {
  for (let i = 0; i < program.projects.length; i++) {
    const project = program.projects[i]
    for (let j = 0; j < project.tasks.length; j++) {
      const task1 = project.tasks[j]
      if (task1.taskId === task.taskId)
        program.projects[i].tasks[j] = { ...task }
    }
  }
}

export function deleteProgramTask(program, task) {
  for (let i = 0; i < program.projects.length; i++) {
    const project = program.projects[i]
    project.tasks = project.tasks.filter(
      ({ taskId }) => task.taskId !== taskId,
    )
  }
}
export const useEditTaskMutation = (
  { taskId, projectId, programId },
  cb?: Function,
) => {
  const queryClient = useQueryClient()
  return useMutation(
    (task: any) => {
      return axios.put(`/projects/${projectId}/tasks/${taskId}`, {
        task,
      })
    },
    {
      onSuccess: async (resp: any) => {
        const { task } = resp.data
        queryClient.setQueryData(['task', task.taskId], {
          data: resp.data,
        })
        const programData: any = queryClient.getQueryData([
          'program',
          programId,
        ])
        if (programData) {
          updateProgramTask(programData.data.program, task)
          queryClient.setQueryData(['program', programId], {
            data: programData.data,
          })
        }

        if (cb) cb()
      },
      onError: (err: Error, variables) =>
        notification.error({
          duration: 2,
          message: `Task ${variables.name} was not updated`,
          description: err.message,
        }),
    },
  )
}
