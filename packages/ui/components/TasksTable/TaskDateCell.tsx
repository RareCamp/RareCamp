import React, { useState } from 'react'
import { DatePicker, Space } from 'antd'
import dayjs from 'dayjs'
import { CaretDownOutlined, LoadingOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useEditTaskMutation } from 'helpers/API/mutation'

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
export default function TaskDateCell({ task, programId, dateKey }) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const updateTaskMutation = useEditTaskMutation({
    programId,
    taskId: task.taskId,
    projectId: task.projectId,
  })
  return (
    <DateCell
      onFocus={() => setShowEdit(true)}
      onBlur={() => setShowEdit(false)}
      onMouseOver={() => setShowEdit(true)}
      onMouseOut={() => setShowEdit(false)}
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
        {showEdit && <CaretDownOutlined />}
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
