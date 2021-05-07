import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowsAltOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import styled from 'styled-components'
import EditTask from '../EditTask'

const TaskDetailsButton = styled(Button)`
  padding: 0;
  position: absolute;
  right: 10px;
  top: 13px;
  width: 120px;
  height: auto;
  display: ${(props) => (props.isVisible ? 'inherit' : 'none')};
`

export default function TaskNameCell({ task, programId }) {
  const [showEdit, setShowEdit] = useState(false)
  const taskDetailsLink = `/tasks/${task.projectId}/${task.taskId}?programId=${programId}`
  return (
    <td
      className="ant-table-cell"
      onFocus={() => setShowEdit(true)}
      onBlur={() => setShowEdit(false)}
      onMouseOver={() => setShowEdit(true)}
      onMouseOut={() => setShowEdit(false)}
    >
      <div style={{ display: showEdit ? 'block' : 'none' }}>
        <EditTask task={task} programId={programId} />
      </div>
      <span>{task.name}</span>
      <Link href={taskDetailsLink}>
        <TaskDetailsButton
          isVisible={showEdit}
          icon={<ArrowsAltOutlined />}
        >
          Task Details
        </TaskDetailsButton>
      </Link>
    </td>
  )
}
