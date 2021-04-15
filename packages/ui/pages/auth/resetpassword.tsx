import React, { useEffect } from 'react'
import { Button, Typography, Form, Input, notification } from 'antd'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import { useMutation } from 'react-query'
import AuthLayout from '../../components/AuthLayout'
import { RestPasswordPayload } from '../../types'

const { Link, Title } = Typography

export default function RestPassword() {
  const [form] = Form.useForm()
  const router = useRouter()
  useEffect(() => {
    form.setFieldsValue({
      username: router.query.username,
    })
  })
  const mutation = useMutation(
    ({ username, code, password }: RestPasswordPayload) =>
      Auth.forgotPasswordSubmit(
        username.trim(),
        code.trim(),
        password.trim(),
      ),
    {
      onSuccess: async () => {
        notification.success({
          message: 'Success!',
          description:
            'Password reset successful, Redirecting you in a few!',
          placement: 'topRight',
          duration: 1.5,
        })
        await router.push('/auth/login')
      },
      onError: async (err: Error) =>
        notification.error({
          message: 'Error reseting password',
          description: err.message,
          placement: 'topRight',
          duration: 3,
        }),
    },
  )

  return (
    <AuthLayout>
      <div>
        <Title level={3}>Rest your password?</Title>
        <p>
          Please enter you reset code and new password.
{' '}
          <p>
            or
{' '}
            <Link onClick={() => router.push('/auth/login')}>
              Login
            </Link>
          </p>
        </p>
      </div>
      <Form
        layout="vertical"
        name="reset_password_form"
        form={form}
        onFinish={mutation.mutate}
      >
        <Form.Item
          label={<span style={{ fontWeight: 500 }}>Email</span>}
          name="username"
          required={false}
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={<span style={{ fontWeight: 500 }}>Reset code</span>}
          name="code"
          required={false}
          rules={[
            {
              required: true,
              message: 'Please input your reset code!',
              max: 6,
            },
          ]}
        >
          <Input placeholder="Your password reset code" />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: '10px' }}
          label={
            <span style={{ fontWeight: 500 }}>New Password</span>
          }
          name="password"
          required={false}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Must be at least 8 characters" />
        </Form.Item>

        <Form.Item>
          <Button
            loading={mutation.isLoading}
            type="primary"
            htmlType="submit"
            block
            className="login-form-button"
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </AuthLayout>
  )
}
