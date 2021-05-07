import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { notification } from 'antd'

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
        queryClient.setQueryData(['task', resp.data.task.taskId], {
          data: resp.data,
        })
        await queryClient.invalidateQueries(['program', programId])
        notification.success({
          duration: 2,
          message: `Task ${resp.data.task.name} has been updated successfully`,
        })
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
