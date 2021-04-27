import {
  Avatar,
  Button,
  DatePicker,
  Dropdown,
  Menu,
  Modal,
  notification,
  Space,
  Tag,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import {
  ExclamationCircleOutlined,
  MoreOutlined,
} from '@ant-design/icons'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import styled from 'styled-components'
import React, { useState } from 'react'
import { TaskStatus } from '../../types'

const { confirm } = Modal
const { Text } = Typography

function renderTaskStatus(status: string) {
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

function deleteTaskFromProgram(program, taskId) {
  for (let i = 0; i < program.projects.length; i++) {
    const project = program.projects[i]
    program.projects[i].tasks = project.tasks.filter(
      (task) => task.taskId !== taskId,
    )
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

const StyledMoreOutlined = styled(MoreOutlined)`
  cursor: pointer;
  position: absolute;
  left: 30px;
`

export default function TaskRow({ task, programId }) {
  const queryClient = useQueryClient()
  const deleteTaskMutation = useMutation(
    () =>
      axios.delete(
        `/projects/${task.projectId}/tasks/${task.taskId}`,
      ),
    {
      onSuccess: async () => {
        const { data } = queryClient.getQueryData<any>([
          'program',
          programId,
        ])
        deleteTaskFromProgram(data.program, task.taskId)
        queryClient.setQueryData(['program', programId], { data })
        notification.success({
          duration: 2,
          message: `Task ${task.name} has been deleted successfully`,
        })
      },
      onError: (err: Error) =>
        notification.error({
          duration: 2,
          message: `Task ${task.name} was not deleted`,
          description: err.message,
        }),
    },
  )

  const deleteTask = () =>
    confirm({
      title: 'Are you sure you want to delete this project?',
      centered: true,
      icon: <ExclamationCircleOutlined />,
      content:
        'Project will be immediately deleted. You cannot undo this action.',
      okText: 'delete',
      onOk: deleteTaskMutation.mutateAsync,
    })

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={deleteTask} type="text">
          <Text type="danger">Delete Project</Text>
        </Button>
      </Menu.Item>
    </Menu>
  )
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
  return (
    <>
      <tr
        data-row-key="2"
        className="ant-table-row ant-table-row-level-0"
      >
        <td className="ant-table-cell">
          <Dropdown overlay={menu}>
            <StyledMoreOutlined />
          </Dropdown>
          <span>{task.name}</span>
        </td>
        <td className="ant-table-cell">
          {renderTaskStatus(task.status)}
        </td>
        <td className="ant-table-cell">
          <Space>
            {task?.assignees?.map((assignee) => (
              <Space size={4}>
                <Avatar>
                  {(assignee.name || assignee.firstName)?.[0]}
                </Avatar>
                <span>{assignee.name || assignee.firstName}</span>
              </Space>
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
    </>
  )
}
