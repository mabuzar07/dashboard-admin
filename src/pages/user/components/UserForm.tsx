import React from "react";
import { Form, Input, Button, Select, Space } from "antd";
import { IUserData } from "../../../types/userData.types";

interface AddUserFormProps {
  addUser: (userData: IUserData) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser }) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const userData: IUserData = {
      key: `${Math.random()}`,
      name: values.name,
      age: values.age,
      address: values.address,
      tags: values.tags,
    };
    addUser(userData);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter a name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please enter an age" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: "Please enter an address" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tags"
        name="tags"
        rules={[{ required: true, message: "Please select at least one tag" }]}
      >
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="select one"
          // onChange={handleChange}
          optionLabelProp="label"
          options={[
            {
              label: "nice",
              value: "nice",
            },
            {
              label: "developer",
              value: "developer",
            },
            {
              label: "loser",
              value: "loser",
            },
          ]}
          optionRender={(option) => <Space>{option.data.label}</Space>}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddUserForm;
