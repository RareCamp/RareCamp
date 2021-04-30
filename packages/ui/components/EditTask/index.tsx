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

const { confirm } = Modal
const { Text } = Typography

const StyledMoreOutlined = styled(MoreOutlined)`
  cursor: pointer;
  position: absolute;
  left: 30px;
`

export default function DeleteTask({
  task,
  programId,
  onSuccess,
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
        if (onSuccess) onSuccess()
        else if (programId) {
          const { data } = queryClient.getQueryData<any>([
            'program',
            programId,
          ])
          queryClient.setQueryData(['task', task.taskId], { data })
        }
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
      title: 'Are you sure you want to delete this project?',
      centered: true,
      icon: <ExclamationCircleOutlined />,
      content:
        'Project will be immediately deleted. You cannot undo this action.',
      okText: 'delete',
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
          <Text type="danger">Delete Project</Text>
        </Button>
      </Menu.Item>
    </Menu>
  )
  const [isEditTaskVisible, setIsEditTaskVisible] = useState(false)
  const [editTaskForm] = Form.useForm()

  const editTaskMutation = useMutation(
    (values: any) => {
      return axios.put(
        `/projects/${task.projectId}/tasks/${task.taskId}`,
        { task: values },
      )
    },
    {
      onSuccess: async (resp) => {
        queryClient.setQueryData(['task', task.taskId], {
          data: resp.data,
        })
        await queryClient.invalidateQueries(['program', programId])
        notification.success({
          duration: 2,
          message: `Task ${task.name} has been updated successfully`,
        })
        setIsEditTaskVisible(false)
      },
      onError: (err: Error) =>
        notification.error({
          duration: 2,
          message: `Task ${task.name} was not updated`,
          description: err.message,
        }),
    },
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
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input task description!',
              },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
