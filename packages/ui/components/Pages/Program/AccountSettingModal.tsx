import React, { useRef } from 'react'
import { LetterPic } from 'components/LetterPic'
import { ModalHeader } from 'components/Modal'
import { Form, Input, Button } from 'antd'

const AccountSettingModal = ({
  setAccountSettingModalOpen,
}: {
  setAccountSettingModalOpen: Function
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
        modalName="My Account Settings"
        onClick={() => setAccountSettingModalOpen(false)}
      />
      <div className="flex flex-start justify-between px-4">
        <div>
          <LetterPic
            letter="R"
            size="lg"
            color="primary"
            textColor="purple"
            className="mt-10"
          />
        </div>

        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={Demo}
          onFinishFailed={onFinishFailed}
        >
          <div className="flex items-center">
            <Input placeholder="first name" />

            <Input placeholder="last name" />
          </div>
          <Input placeholder="Example@gmail.com" />

          <Input placeholder="Example Foundation" />

          <Input placeholder="Foundation.org" />
          <div className="flex justify-end mt-4">
            <Button onClick={() => setAccountSettingModalOpen(false)}>
              Cancel
            </Button>
            <Button type="primary" onClick={() => {}}>
              Save
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default AccountSettingModal
