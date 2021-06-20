import { Avatar, Space } from 'antd'
import TaskNameCell from 'components/TasksTable/TaskNameCell'
import TaskDateCell from 'components/TasksTable/TaskDateCell'
import TaskStatusCell from 'components/TasksTable/TaskStatusCell'
import React from 'react'
import TaskBudgetCell from './TaskBudgetCell'

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
  return (
    <tr data-row-key="2" className="ant-table-row">
      <TaskNameCell task={task} programId={programId} />
      <TaskStatusCell task={task} programId={programId} />
      <td className="ant-table-cell" style={{ width: 150 }}>
        <Space>
          {task?.assignees?.map((assignee) => (
            <AssigneeAvatar
              key={assignee.name}
              size={24}
              assignee={assignee}
            />
          ))}
        </Space>
      </td>
      <TaskBudgetCell task={task} programId={programId} />
      <TaskDateCell
        dateKey="estimatedStartDate"
        programId={programId}
        task={task}
      />
      <TaskDateCell
        dateKey="estimatedEndDate"
        programId={programId}
        task={task}
      />
    </tr>
  )
}
