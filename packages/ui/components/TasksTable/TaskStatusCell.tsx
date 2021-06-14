import TaskStatus from 'components/TaskStatus'
import { useState } from 'react'
import { CaretDownOutlined } from '@ant-design/icons'

export default function TaskStatusCell({ task, programId }) {
  const [showEdit, setShowEdit] = useState(false)
  return (
    <td
      onFocus={() => setShowEdit(true)}
      onBlur={() => setShowEdit(false)}
      onMouseOver={() => setShowEdit(true)}
      onMouseOut={() => setShowEdit(false)}
      className="ant-table-cell"
      style={{ width: 130 }}
    >
      <TaskStatus task={task} programId={programId} />
      <CaretDownOutlined
        style={{
          position: 'absolute',
          visibility: showEdit ? 'visible' : 'hidden',
        }}
      />
    </td>
  )
}
