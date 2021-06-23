import {
  MoreOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import {
  Dropdown,
  Menu,
  Modal,
  Typography,
  notification,
  Form,
  Input,
  Button,
} from 'antd'
import styled from 'styled-components'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const { confirm } = Modal

const { Text } = Typography
const EditProjectDropdown = styled('div')`
  .anticon-more {
    font-size: 18px;
    &:hover {
      background-color: rgba(62, 52, 101, 0.5);
    }
  }
`

export default function EditProject({
  project,
  onDeleted,
}: {
  project: any
  onDeleted?: any
}) {
  const [isEditProjectVisible, setIsEditProjectVisible] =
    useState(false)
  const deleteProject = () =>
    confirm({
      okButtonProps: {
        style: { backgroundColor: '#e53935', borderColor: '#e53935' },
      },
      title: 'Are you sure you want to delete this project?',
      centered: true,
      icon: <ExclamationCircleOutlined />,
      content:
        'Project will be immediately deleted. You cannot undo this action.',
      okText: 'Delete',
      onOk: deleteProjectMutation.mutateAsync,
      onCancel: () => {},
    })
  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          type="text"
          onClick={() => setIsEditProjectVisible(true)}
        >
          Edit Project name
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={deleteProject} type="text">
          <Text type="danger">Delete Project</Text>
        </Button>
      </Menu.Item>
    </Menu>
  )
  const queryClient = useQueryClient()
  const deleteProjectMutation = useMutation(
    () =>
      axios.delete(
        `/programs/${project.programId}/projects/${project.projectId}`,
      ),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([
          'program',
          project.programId,
        ])
        notification.success({
          duration: 2,
          message: `Project ${project.name} has been deleted successfully`,
        })
        if (onDeleted) onDeleted()
      },
      onError: (err: Error) =>
        notification.error({
          duration: 2,
          message: `Project ${project.name} was not deleted`,
          description: err.message,
        }),
    },
  )
  const editProjectMutation = useMutation(
    (values: { name: string; description: string }) => {
      const data = { ...project, ...values }
      return axios.put(
        `/programs/${project.programId}/projects/${project.projectId}`,
        {
          project: { name: data.name, description: data.description },
        },
      )
    },
    {
      onSuccess: async () => {
        notification.success({
          duration: 2,
          message: `Project ${project.name} has been updated successfully`,
        })
        await queryClient.invalidateQueries([
          'program',
          project.programId,
        ])
        setIsEditProjectVisible(false)
      },
      onError: (err: Error) =>
        notification.error({
          duration: 2,
          message: `Project ${project.name} was not updated`,
          description: err.message,
        }),
    },
  )
  const [editProjectForm] = Form.useForm()

  return (
    <EditProjectDropdown>
      <Dropdown overlay={menu}>
        <MoreOutlined />
      </Dropdown>
      <Modal
        centered
        title="Edit Project Details"
        visible={isEditProjectVisible}
        okText="Save"
        onOk={() => {
          editProjectForm.validateFields().then((values) => {
            // editProjectForm.resetFields()
            editProjectMutation.mutate(values)
          })
        }}
        confirmLoading={editProjectMutation.isLoading}
        onCancel={() => setIsEditProjectVisible(false)}
      >
        <Form
          name="editProject"
          initialValues={{
            name: project.name,
            description: project.description,
          }}
          form={editProjectForm}
          layout="vertical"
        >
          <Form.Item
            label="Project Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input project name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ message: 'Please input project description' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </EditProjectDropdown>
  )
}
