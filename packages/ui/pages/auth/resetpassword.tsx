import React, { useEffect } from "react";
import { Button, Typography, Form, Input, notification } from "antd";
import AuthLayout from "../../components/AuthLayout";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";

const { Link, Title } = Typography;


export default function RestPassword() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [form] = Form.useForm();

  const router = useRouter();
  useEffect(() => {
    form.setFieldsValue({
      username: router.query.username
    });
  });
  const onFinish = async (values: any) => {
    if (isLoading) return;
    setIsLoading(true);
    const { username, code, password } = values;
    try {
      await Auth.forgotPasswordSubmit(username.trim(), code.trim(), password.trim());
      notification.success({
        message: "Success!",
        description: "Password reset successful, Redirecting you in a few!",
        placement: "topRight",
        duration: 1.5
      });
      await router.push("/auth/login");
    } catch (err) {
      notification.error({
        message: "Error reseting password",
        description: err.message,
        placement: "topRight",
        duration: 3
      });
    }finally {
      setIsLoading(false)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return <AuthLayout>
    <div>
      <Title level={3}>Rest your password?</Title>
      <p>Please enter you reset code and new password. <p>or <Link
        onClick={() => router.push("/auth/login")}>Login</Link>
      </p></p>
    </div>
    <Form
      layout="vertical"
      name="reset_password_form"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={<span style={{ fontWeight: 500 }}>Email</span>}
        name="username"
        required={false}
        rules={[{ required: true, message: "Please input your email!", type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={<span style={{ fontWeight: 500 }}>Reset code</span>}
        name="code"
        required={false}
        rules={[{ required: true, message: "Please input your reset code!", max: 6 }]}
      >
        <Input placeholder="Your password reset code" />
      </Form.Item>

      <Form.Item
        style={{ marginBottom: "10px" }}
        label={<span style={{ fontWeight: 500 }}>New Password</span>}
        name="password"
        required={false}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Must be at least 8 characters" />
      </Form.Item>

      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit" block className="login-form-button">
          Reset Password
        </Button>
      </Form.Item>
    </Form>
  </AuthLayout>;
}

