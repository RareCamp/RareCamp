import { Button, Dropdown, Menu, Tag } from 'antd'
import React from 'react'
import { TaskStatuses } from 'types'
import { LoadingOutlined } from '@ant-design/icons'
import { useEditTaskMutation } from 'helpers/API/mutation'

const statusMeta = {
  [TaskStatuses.COMPLETED]: {
    bgColor: '#389e0d',
    label: 'Completed',
  },
  [TaskStatuses.IN_PROGRESS]: {
    bgColor: '#fa8c16',
    label: 'In Progress',
  },
  [TaskStatuses.NOT_STARTED]: {
    bgColor: '#bfbfbf',
    label: 'Not Started',
  },
}

export default function TaskStatus({ task, programId }) {
  const taskMutation = useEditTaskMutation({
    taskId: task.taskId,
    programId,
    projectId: task.projectId,
  })
  const menu = (
    <Menu>
      {Object.values(TaskStatuses).map((status) => (
        <Menu.Item
          key={status}
          style={{
            backgroundColor:
              status !== task.status ? 'transparent' : '#eee',
          }}
        >
          <Button
            type="text"
            onClick={() => {
              if (status !== task.status)
                taskMutation.mutate({ ...task, status })
            }}
          >
            <Tag color={statusMeta[status].bgColor}>
              {statusMeta[status].label}
            </Tag>
          </Button>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Dropdown overlay={menu}>
      <Tag
        style={{ cursor: 'pointer' }}
        color={statusMeta[task.status].bgColor}
      >
        {taskMutation.isLoading ? (
          <LoadingOutlined />
        ) : (
          statusMeta[task.status].label
        )}
      </Tag>
    </Dropdown>
  )
}
