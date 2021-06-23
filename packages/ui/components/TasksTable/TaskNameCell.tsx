import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowsAltOutlined, LoadingOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import styled from 'styled-components'
import EditTask from 'components/EditTask'
import { useEditTaskMutation } from 'helpers/API/mutation'

const TaskDetailsButton = styled(Button)`
  padding: 0;
  position: absolute;
  right: 10px;
  top: 32%;
  width: 120px;
  height: auto;
  display: ${({ cssdisplay }) => cssdisplay};
`

const EditTaskButton = styled(Form.Item)`
  padding: 0;
  margin: 0 150px 0 0;
  input {
    border: none;
  }
`

export default function TaskNameCell({ task, programId }) {
  const [showEdit, setShowEdit] = useState(false)
  const taskDetailsLink = `/tasks/${task.projectId}/${task.taskId}?programId=${programId}`
  const editTaskNameMutation = useEditTaskMutation({
    taskId: task.taskId,
    projectId: task.projectId,
    programId,
  })
  const [nameEditForm] = Form.useForm()
  const submitForm = ({ name }) => {
    editTaskNameMutation.mutate({ ...task, name })
  }
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
      <Form
        name={`edit_name_${task.taskId}`}
        initialValues={{ name: task.name }}
        form={nameEditForm}
        onFinish={submitForm}
      >
        <EditTaskButton
          name="name"
          required={false}
          rules={[
            {
              required: true,
              message: 'Task name can not be empty',
            },
          ]}
        >
          <Input
            disabled={editTaskNameMutation.isLoading}
            suffix={
              editTaskNameMutation.isLoading ? (
                <LoadingOutlined
                  style={{ color: 'rgba(0,0,0,.45)' }}
                />
              ) : null
            }
          />
        </EditTaskButton>
      </Form>

      <Link href={taskDetailsLink}>
        <TaskDetailsButton
          cssdisplay={showEdit ? 'inherit' : 'none'}
          icon={<ArrowsAltOutlined />}
        >
          Task Details
        </TaskDetailsButton>
      </Link>
    </td>
  )
}
