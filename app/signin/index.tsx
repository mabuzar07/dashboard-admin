"use client";
import React from "react";
import { Form, Input, Button, Card } from "antd";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const router = useRouter();
  const onFinish = (values: any) => {
    // signIn({ username: values.username });
    console.log("signin");
    router.push("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card title="Sign In" style={{ width: 300 }}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              className="bg-[#1677ff]"
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
