import { Avatar, DatePicker, Space, Tooltip } from 'antd'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import Link from 'next/link'
import EditTask from 'components/EditTask'
import TaskStatus from 'components/TaskStatus'
import { useEditTaskMutation } from 'helpers/API/mutation'
import { CaretDownOutlined, LoadingOutlined } from '@ant-design/icons'
import styled from 'styled-components'

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

const DateCell = styled('td')`
  &:hover {
    border: 1px solid #1890ff !important;
    cursor: pointer;
  }
  width: 120px;
  .ant-picker {
    visibility: hidden;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`
export function EditDate({ task, programId, dateKey }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const updateTaskMutation = useEditTaskMutation({
    programId,
    taskId: task.taskId,
    projectId: task.projectId,
  })
  return (
    <DateCell
      className="ant-table-cell"
      onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
      onKeyPress={() => setIsDatePickerOpen(!isDatePickerOpen)}
      tabIndex={task.taskId}
    >
      <Space>
        <span>
          {task[dateKey]
            ? dayjs(task[dateKey]).format('DD/MM/YYYY')
            : ''}
        </span>
        {isDatePickerOpen && !updateTaskMutation.isLoading && (
          <CaretDownOutlined />
        )}
        {updateTaskMutation.isLoading && <LoadingOutlined />}
      </Space>
      <DatePicker
        open={isDatePickerOpen}
        onOpenChange={(open) => setIsDatePickerOpen(open)}
        onChange={(date) => {
          if (date) {
            updateTaskMutation.mutate({
              [dateKey]: date?.toDate(),
            })
          }
        }}
      />
    </DateCell>
  )
}

export default function TaskRow({ task, programId }) {
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
        <TaskStatus task={task} programId={programId} />
      </td>
      <td className="ant-table-cell">
        <Space>
          {task?.assignees?.map((assignee) => (
            <AssigneeAvatar size={24} assignee={assignee} />
          ))}
        </Space>
      </td>
      <td className="ant-table-cell">
        <Tooltip title="Budget estimate based on data from patient led organizations">
          <span>
            {task.budget?.currency}
            {task.budget?.amount}
          </span>
        </Tooltip>
      </td>
      <EditDate
        dateKey="estimatedStartDate"
        programId={programId}
        task={task}
      />
      <EditDate
        dateKey="estimatedEndDate"
        programId={programId}
        task={task}
      />
    </tr>
  )
}
