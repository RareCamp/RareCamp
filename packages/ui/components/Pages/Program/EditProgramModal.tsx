import React, { useRef } from 'react'
import { ModalHeader } from 'components/Modal'
import { Form, Input, Button } from 'antd'

const EditProgramModal = ({
  setEditProgramModalOpen,
}: {
  setEditProgramModalOpen: Function
}) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  }

  const Demo = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <ModalHeader
        modalName="Edit Program Details"
        onClick={() => {
          setEditProgramModalOpen(false)
        }}
      />
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={Demo}
        onFinishFailed={onFinishFailed}
      >
        <Input placeholder="Basic usage" />
        <label
          htmlFor="description"
          className="text-sm text-gray-500 text-light mt-4"
        >
          Description
          <textarea
            id="description"
            rows={5}
            className="text-sm text-gray-500 text-light h-16 mt-4 px-4 border border-gray-200 rounded focus:outline-none w-full"
            value="This program captures essential steps in the SSMD gene
        therapy roadmap"
          />
        </label>

        <div className="flex justify-end mt-4">
          <Button onClick={() => setEditProgramModalOpen(false)}>
            Cancel
          </Button>
          <Button
            type="primary"
            onClick={() => setEditProgramModalOpen(false)}
          >
            Save
          </Button>
        </div>
      </Form>
    </>
  )
}

export default EditProgramModal
