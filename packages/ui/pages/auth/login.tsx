import React from "react";
import Auth from "@aws-amplify/auth";
import { Button, Typography, Checkbox, Form, Input, notification } from "antd";
import AuthLayout from "../../components/AuthLayout";
import Link from "next/link";

import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { LoginPayload } from "../../types";

const { Title } = Typography;

export default function App() {
  const router = useRouter()

  const mutation = useMutation(
    ({ username, password }: LoginPayload) =>
      Auth.signIn(username, password),
    {
      onSuccess: async () => {
        notification.success({
          message: 'Successfully logged in!',
          description:
            'Logged in successfully, Redirecting you in a few!',
          placement: 'topRight',
          duration: 1.5,
        })
        await router.push('/')
      },
      onError: (err: Error) => {
        notification.error({
          message: 'Login failed',
          description: err.message,
          placement: 'topRight',
        })
      },
    },
  )

  return (
    <AuthLayout>
      <div>
        <Title level={3}>Log in</Title>
        <p>
          or Don't have an account yet?{' '}
          <Link href="/auth/register">Signup</Link>
        </p>
      </div>
      <Form
        layout="vertical"
        name="login_form"
        initialValues={{ remember: true }}
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
          <Input placeholder="email@example.com" />
        </Form.Item>
        <Form.Item
          label={<span style={{ fontWeight: 500 }}>Password</span>}
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
        <Link href="/auth/password">Forgot your password?</Link>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button
            loading={mutation.isLoading}
            style={{ float: 'right' }}
            type="primary"
            htmlType="submit"
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
         </AuthLayout>
}
}
