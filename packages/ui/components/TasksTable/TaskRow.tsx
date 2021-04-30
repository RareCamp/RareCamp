import { Avatar, DatePicker, notification, Space, Tag } from 'antd'
import dayjs from 'dayjs'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import React, { useState } from 'react'
import Link from 'next/link'
import { TaskStatus } from 'types'
import EditTask from '../EditTask'

export function renderTaskStatus(status: string) {
  switch (status) {
    case TaskStatus.COMPLETED:
      return <Tag color="#389e0d">Completed</Tag>
    case TaskStatus.IN_PROGRESS:
      return <Tag color="#fa8c16">In Progress</Tag>
    case TaskStatus.NOT_STARTED:
      return <Tag color="#bfbfbf">Not Started</Tag>
    default:
      return <Tag>{status}</Tag>
  }
}

function updateTask(program, taskId, task) {
  for (let i = 0; i < program.projects.length; i++) {
    const project = program.projects[i]
    for (let j = 0; j < project.tasks.length; j++) {
      if (project.tasks[j].taskId === taskId) {
        program.projects[i].tasks[j] = task
        break
      }
    }
  }
}

export function AssigneeAvatar({
  assignee,
  size,
}: {
  assignee: any
  size?: number
}) {
  return assignee ? (
    <Space size={4}>
      <Avatar size={size || 32}>
        {(assignee.name || assignee.firstName)?.[0]}
      </Avatar>
      <span>{assignee.name || assignee.firstName}</span>
    </Space>
  ) : null
}

export default function TaskRow({ task, programId }) {
  const queryClient = useQueryClient()
  const [isStartDateOpen, setIsStartDateOpen] = useState(false)
  const [isEndDateOpen, setIsEndDateOpen] = useState(false)
  const updateTaskMutation = useMutation(
    (data: any) =>
      axios.put(
        `/projects/${task.projectId}/tasks/${task.taskId}`,
        data,
      ),
    {
      onSuccess: (resp) => {
        const { data } = queryClient.getQueryData<any>([
          'program',
          programId,
        ])
        updateTask(data.program, task.taskId, resp.data.task)
        queryClient.setQueryData(['program', programId], { data })
        notification.success({
          message: 'Task has been successfully updated',
        })
      },
      onError: (err) => {
        notification.error({
          message: 'Error while updating the task',
          description: String(err),
        })
      },
    },
  )
  const taskDetailsLink = `/tasks/${task.projectId}/${task.taskId}?programId=${programId}`
  return (
    <tr data-row-key="2" className="ant-table-row">
      <td className="ant-table-cell">
        <EditTask task={task} programId={programId} />
        <Link href={taskDetailsLink}>
          <span style={{ cursor: 'pointer' }}>{task.name}</span>
        </Link>
      </td>
      <td className="ant-table-cell">
        {renderTaskStatus(task.status)}
      </td>
      <td className="ant-table-cell">
        <Space>
          {task?.assignees?.map((assignee) => (
            <AssigneeAvatar assignee={assignee} />
          ))}
        </Space>
      </td>
      <td className="ant-table-cell">
        {task.budget?.currency}
        {task.budget?.amount}
      </td>
      <td
        className="ant-table-cell"
        onClick={() => setIsStartDateOpen(!isStartDateOpen)}
        onKeyPress={() => setIsStartDateOpen(!isStartDateOpen)}
        tabIndex={task.taskId}
      >
        {task.estimatedStartDate
          ? dayjs(task.estimatedStartDate).format('DD/MM/YYYY')
          : ''}
        <span>
          <DatePicker
            open={isStartDateOpen}
            style={{ visibility: 'hidden', width: 0 }}
            onOpenChange={(open) => setIsStartDateOpen(open)}
            onChange={(date) => {
              if (date) {
                updateTaskMutation.mutate({
                  task: {
                    estimatedStartDate: date?.toDate(),
                  },
                })
              }
            }}
          />
        </span>
      </td>
      <td
        className="ant-table-cell"
        onClick={() => setIsEndDateOpen(!isEndDateOpen)}
        onKeyPress={() => setIsEndDateOpen(!isEndDateOpen)}
        tabIndex={task.taskId}
      >
        {task.estimatedEndDate
          ? dayjs(task.estimatedEndDate).format('DD/MM/YYYY')
          : ''}
        <span>
          <DatePicker
            open={isEndDateOpen}
            style={{ visibility: 'hidden', width: 0 }}
            onOpenChange={(open) => setIsEndDateOpen(open)}
            onChange={(date) => {
              if (date) {
                updateTaskMutation.mutate({
                  task: {
                    estimatedEndDate: date?.toDate(),
                  },
                })
              }
            }}
          />
        </span>
      </td>
    </tr>
  )
}
