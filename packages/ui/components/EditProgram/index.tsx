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
import { useRouter } from 'next/router'

const { confirm } = Modal

const { Text } = Typography
const EditProgramDropdown = styled('div')`
  .anticon-more {
    font-size: 18px;
    &:hover {
      background-color: rgba(62, 52, 101, 0.5);
    }
  }
`

export default function EditProgram({ program }) {
  const [isEditProgramVisible, setIsEditProgramVisible] =
    useState(false)
  const deleteProgram = () =>
    confirm({
      okButtonProps: {
        style: { backgroundColor: '#e53935', borderColor: '#e53935' },
      },
      title: 'Are you sure you want to delete this program?',
      centered: true,
      icon: <ExclamationCircleOutlined />,
      content:
        'Program will be immediately deleted. You cannot undo this action.',
      okText: 'Delete',
      onOk: deleteProgramMutation.mutateAsync,
      onCancel() {},
    })
  const menu = (
    <Menu>
      <Menu.Item>
        <Button
          onClick={() => setIsEditProgramVisible(true)}
          type="text"
        >
          Edit Program Details
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={deleteProgram} type="text">
          <Text type="danger">Delete Program</Text>
        </Button>
      </Menu.Item>
    </Menu>
  )
  const router = useRouter()
  const queryClient = useQueryClient()
  const deleteProgramMutation = useMutation(
    () =>
      axios.delete(
        `/workspaces/${program.workspaceId}/programs/${program.programId}`,
      ),
    {
      onSuccess: async () => {
        notification.success({
          duration: 2,
          message: `Program ${program.name} has been deleted successfully`,
        })
        const { data } = queryClient.getQueryData<any>(
          'defaultWorkspace',
        )
        queryClient.invalidateQueries('defaultWorkspace')
        if (data.workspace?.programs?.length) {
          await router.push('/workspace/intro')
        } else {
          await router.push('/')
        }
      },
      onError: (err: Error) =>
        notification.error({
          duration: 2,
          message: `Program ${program.name} was not deleted`,
          description: err.message,
        }),
    },
  )
  const editProgramMutation = useMutation(
    (values: { name: string; description: string }) => {
      const data = { ...program, ...values }
      return axios.put(
        `/workspaces/${program.workspaceId}/programs/${program.programId}`,
        {
          program: { name: data.name, description: data.description },
        },
      )
    },
    {
      onSuccess: async (resp) => {
        queryClient.setQueryData(['program', program.programId], {
          data: resp.data,
        })
        await queryClient.invalidateQueries('defaultWorkspace')
        notification.success({
          duration: 2,
          message: `Program ${program.name} has been updated successfully`,
        })
        setIsEditProgramVisible(false)
      },
      onError: (err: Error) =>
        notification.error({
          duration: 2,
          message: `Program ${program.name} was not updated`,
          description: err.message,
        }),
    },
  )
  const [editProgramForm] = Form.useForm()

  return (
    <EditProgramDropdown>
      <Dropdown overlay={menu}>
        <MoreOutlined />
      </Dropdown>
      <Modal
        centered
        title="Edit Program Details"
        visible={isEditProgramVisible}
        okText="Save"
        onOk={() => {
          editProgramForm.validateFields().then((values) => {
            // editProgramForm.resetFields()
            editProgramMutation.mutate(values)
          })
        }}
        confirmLoading={editProgramMutation.isLoading}
        onCancel={() => setIsEditProgramVisible(false)}
      >
        <Form
          name="editProgram"
          initialValues={{
            name: program.name,
            description: program.description,
          }}
          form={editProgramForm}
          layout="vertical"
        >
          <Form.Item
            label="Program Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input program name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ message: 'Please input program description' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </EditProgramDropdown>
  )
}
