import React from "react";
import Auth from "@aws-amplify/auth";
import { Button, Typography, Checkbox, Form, Input, notification } from "antd";
import AuthLayout from "../../components/AuthLayout";
import Link from "next/link";

const { Title } = Typography;

import { useRouter } from "next/router";

export default function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const router = useRouter();

  async function onFinish(values) {
    if (isLoading) return;
    setIsLoading(true);
    const { password, username } = values;
    try {
      await Auth.signIn(username, password);
      notification.success({
        message: "Successfully logged in!",
        description: "Logged in successfully, Redirecting you in a few!",
        placement: "topRight",
        duration: 1.5
      });
      await router.push("/");
    } catch (err) {
      notification.error({
        message: "Error",
        description: err.message,
        placement: "topRight"
      });
    } finally {
      setIsLoading(false);
    }

  }

  return <AuthLayout>
    <div>
      <Title level={3}>Log in</Title>
      <p>or Don't have an account yet? <Link href="/auth/register">Signup</Link></p>
    </div>
    <Form
      layout="vertical"
      name="login_form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={<span style={{ fontWeight: 500 }}>Email</span>}
        name="username"
        required={false}
        rules={[{ required: true, message: "Please input your email!", type: "email" }]}
      >
        <Input placeholder="email@example.com" />
      </Form.Item>
      <Form.Item
        label={<span style={{ fontWeight: 500 }}>Password</span>}
        name="password"
        required={false}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Must be at least 8 characters" />
      </Form.Item>
      <Link href="/auth/password">Forgot your password?</Link>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Button loading={isLoading} style={{ float: "right" }} type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  </AuthLayout>;
}

