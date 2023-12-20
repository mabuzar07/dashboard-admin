import React from "react";
import { Form, Input, Button } from "antd";

const ChangePasswordForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: {
    password: string;
    confirmPassword: string;
  }) => {};

  const onFinishFailed = (errorInfo: any) => {};

  const validateConfirmPassword = (_: any, value: string) => {
    const password = form.getFieldValue("password");
    if (value !== password) {
      return Promise.reject(new Error("The two passwords do not match!"));
    }
    return Promise.resolve();
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          {
            validator: validateConfirmPassword,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className="flex justify-center">
        <Button type="primary" className="bg-[#1677ff]" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChangePasswordForm;
