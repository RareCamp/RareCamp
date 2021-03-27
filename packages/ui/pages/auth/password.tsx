import React from "react";
import { Button, Typography, Form, Input, notification } from "antd";
import AuthLayout from "../../components/AuthLayout";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import { useMutation } from "react-query";

const { Link, Title } = Typography;


export default function App() {
  const router = useRouter();
  const mutation = useMutation(({ username }: { username: string }) => Auth.forgotPassword(username), {
    onSuccess: async (_, variables) => {
      notification.success({
        message: "Instructions Sent to your emails",
        description: "Account confirmed successfully!",
        placement: "topRight",
        duration: 1.5
      });
      await router.push(`/auth/resetpassword?username=${variables.username}`);
    },
    onError: async (err: Error) => {
      notification.error({
        message: "User confirmation failed",
        description: err.message,
        placement: "topRight",
        duration: 3
      });
    }
  });

  return <AuthLayout>
    <div>
      <Title level={3}>Forgot your password?</Title>
      <p>We'll send you an email with instructions. <p>or <Link onClick={() => router.push("/auth/login")}>Login</Link>
      </p></p>
    </div>
    <Form
      layout="vertical"
      name="forgot_password_form"
      onFinish={mutation.mutate}
    >
      <Form.Item
        label={<span style={{ fontWeight: 500 }}>Email</span>}
        name="username"
        required={false}
        rules={[{ required: true, message: "Please input your email!", type: "email" }]}
      >
        <Input placeholder="email@example.com" />
      </Form.Item>
      <Form.Item>
        <Button loading={mutation.isLoading} type="primary" htmlType="submit" block className="login-form-button">
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  </AuthLayout>;
}

