import React, { useState } from 'react'
import { Form, Input, Tooltip } from 'antd'
import { useEditTaskMutation } from 'helpers/API/mutation'
import styled from 'styled-components'
import { LoadingOutlined } from '@ant-design/icons'

const EditTask = styled(Form.Item)`
  padding: 0;
  margin: 0;
  input {
    border: none;
  }
`

export default function TaskBudgetCell({ task, programId }) {
  const [showEdit, setShowEdit] = useState(false)
  const updateTaskMutation = useEditTaskMutation(
    {
      programId,
      taskId: task.taskId,
      projectId: task.projectId,
    },
    () => setShowEdit(false),
  )
  const [editTask] = Form.useForm()
  const submitForm = ({ amount }) => {
    updateTaskMutation.mutate({
      ...task,
      budget: { ...task.budget, amount: parseFloat(amount) },
    })
  }
  return (
    <td className="ant-table-cell" style={{ width: 100 }}>
      <Tooltip title="Budget estimate based on data from patient led organizations">
        {showEdit ? (
          <Form
            form={editTask}
            name="edit_form"
            initialValues={{ amount: task.budget?.amount }}
            onFinish={submitForm}
          >
            <EditTask
              name="amount"
              required={false}
              rules={[
                {
                  required: true,
                  message: 'Task Budget can not be empty!',
                },
              ]}
            >
              <Input
                type="number"
                required
                onBlur={() => setShowEdit(false)}
                autoFocus={showEdit}
                disabled={updateTaskMutation.isLoading}
                suffix={
                  updateTaskMutation.isLoading ? (
                    <LoadingOutlined
                      style={{ color: 'rgba(0,0,0,.45)' }}
                    />
                  ) : null
                }
              />
            </EditTask>
          </Form>
        ) : (
          <div
            onFocus={() => setShowEdit(true)}
            onClick={() => setShowEdit(true)}
            onBlur={() => setShowEdit(false)}
            aria-hidden="true"
          >
            {task.budget?.amount ? (
              <>
                <span>{task.budget?.currency}</span>
                <span>{task.budget?.amount}</span>
              </>
            ) : (
              <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
                <img src="/start.svg" alt="start svg" />
                <span>{` ${task.budget?.currency}`}</span>
                <span>{task.budget?.default}</span>
              </span>
            )}
          </div>
        )}
      </Tooltip>
    </td>
  )
}
