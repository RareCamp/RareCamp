import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import {
  Button,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
  notification,
  Typography,
} from 'antd'
import {
  ExclamationCircleOutlined,
  MoreOutlined,
} from '@ant-design/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  deleteProgramTask,
  useEditTaskMutation,
} from 'helpers/API/mutation'

const { confirm } = Modal
const { Text } = Typography

const StyledMoreOutlined = styled(MoreOutlined)`
  cursor: pointer;
  position: absolute;
  left: 30px;
  top: 20px;
`

export default function EditTask({
  task,
  programId,
  // onSuccess,
  styles,
}: {
  task: any
  programId?: string
  onSuccess?: any
  styles?: object
}) {
  const queryClient = useQueryClient()
  const deleteTaskMutation = useMutation(
    () =>
      axios.delete(
        `/projects/${task.projectId}/tasks/${task.taskId}`,
      ),
    {
      onSuccess: async () => {
        // if (onSuccess) onSuccess()
        // else {
        const programData: any = queryClient.getQueryData([
          'program',
          programId,
        ])
        deleteProgramTask(programData.data.program, task)
        queryClient.setQueryData(['program', programId], {
          data: programData.data,
        })
        // }
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
      okButtonProps: {
        style: { backgroundColor: '#e53935', borderColor: '#e53935' },
      },
      title: 'Are you sure you want to delete this Task?',
      centered: true,
      icon: <ExclamationCircleOutlined />,
      content:
        'Task will be immediately deleted. You cannot undo this action.',
      okText: 'Delete',
      onOk: deleteTaskMutation.mutateAsync,
    })

  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          onClick={() => setIsEditTaskVisible(true)}
          type="text"
        >
          Edit Task name
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={deleteTask} type="text">
          <Text type="danger">Delete Task</Text>
        </Button>
      </Menu.Item>
    </Menu>
  )
  const [isEditTaskVisible, setIsEditTaskVisible] = useState(false)
  const [editTaskForm] = Form.useForm()

  const editTaskMutation = useEditTaskMutation(
    {
      programId,
      taskId: task.taskId,
      projectId: task.projectId,
    },
    () => setIsEditTaskVisible(false),
  )

  return (
    <div>
      <Dropdown overlay={menu}>
        <StyledMoreOutlined style={{ ...styles }} />
      </Dropdown>
      <Modal
        centered
        title="Edit Task Details"
        visible={isEditTaskVisible}
        okText="Save"
        onOk={() => {
          editTaskForm.validateFields().then((values) => {
            editTaskMutation.mutate(values)
          })
        }}
        confirmLoading={editTaskMutation.isLoading}
        onCancel={() => setIsEditTaskVisible(false)}
      >
        <Form
          name="editTask"
          initialValues={{
            name: task.name,
            description: task.description,
          }}
          form={editTaskForm}
          layout="vertical"
        >
          <Form.Item
            label="Task Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input task name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
