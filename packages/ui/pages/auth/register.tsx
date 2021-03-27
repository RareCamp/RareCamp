import React from "react";
import Auth from "@aws-amplify/auth";
import "../../styles/antd.less";
import { Button, Typography, Form, Input, notification, Spin } from "antd";
import AuthLayout from "../../components/AuthLayout";

const { Title, Link } = Typography;

import { useRouter } from "next/router";

export default function App() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter()
  const onFinish = async (values: any) => {
    if (isLoading) return;
    const { name, password, username } = values;
    setIsLoading(true);
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email: username, name }
      });
      notification.success({
        message: "Successfully signed up user!",
        description: "Account created successfully, Redirecting you in a few!",
        placement: "topRight",
        duration: 1.5,
        onClose: () => setIsLoading(false)
      });
      await Auth.signIn(username, password);
      await router.push('/')
    } catch (e) {
      console.error(e)
      notification.error({
        message: "Error",
        description: e.message,
        placement: "topRight",
        duration: 1.5
      });
      setIsLoading(false);
    }
  };

  return <AuthLayout>
    <div>
      <Title level={3}>Sign up for an account</Title>
      <p>or <Link onClick={() => router.push('/auth/login')}>log in to your account</Link></p>
    </div>
    <Form
      layout="vertical"
      name="register_form"
      onFinish={onFinish}
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
        label={<span style={{ fontWeight: 500 }}>Name</span>}
        name="name"
        required={false}
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Jhon Rick " />
      </Form.Item>
      <Form.Item
        style={{ marginBottom: "10px" }}
        label={<span style={{ fontWeight: 500 }}>Password</span>}
        name="password"
        required={false}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Must be at least 8 characters" />
      </Form.Item>
      <>
        <Form.Item>
          <Button type="primary"  disabled={isLoading} loading={isLoading} htmlType="submit" block className="login-form-button">
            Sign up
          </Button>
        </Form.Item>
        <Form.Item>
          <p style={{ fontSize: 12 }}>By signing up, you acknowledge you have read and understood
            OpenGT’s <Link>Privacy policy</Link> & <Link>Terms of service</Link></p>
        </Form.Item>
      </>
    </Form>
  </AuthLayout>;
}

