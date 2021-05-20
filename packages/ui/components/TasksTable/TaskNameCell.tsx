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
  top: 15px;
  width: 120px;
  height: auto;
  display: ${(props) => (props.isVisible ? 'inherit' : 'none')};
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
  const submitForm = (e) => {
    if (e.which === 10 || e.which === 13) {
      nameEditForm.validateFields().then(({ name }) => {
        editTaskNameMutation.mutate({ ...task, name })
      })
    }
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
        name="edit_name"
        initialValues={{ name: task.name }}
        form={nameEditForm}
        onKeyPress={submitForm}
      >
        <EditTaskButton name="name">
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
          isVisible={showEdit}
          icon={<ArrowsAltOutlined />}
        >
          Task Details
        </TaskDetailsButton>
      </Link>
    </td>
  )
}
