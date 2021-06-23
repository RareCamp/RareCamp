import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { notification } from 'antd'

function updateProgramTask(program, task) {
  program.projects.forEach((project) => {
    project.tasks.forEach((existentTask, index) => {
      if (existentTask.taskId === task.taskId)
        project.tasks[index] = { ...task }
    })
  })
}

export function deleteProgramTask(program, task) {
  program.projects.forEach((project) => {
    project.tasks = project.tasks.filter(
      ({ taskId }) => task.taskId !== taskId,
    )
  })
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
