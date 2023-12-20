import React, { useState, useContext } from "react";
import { Button, Space, Table, Tag, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IUserData } from "../../../types/userData.types";
import { UserContext } from "../../store/context-provider";
import ChangePasswordForm from "./ChangePasswordForm";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

interface UsersTableProps {
  users: IUserData[];
  handleDelete: (id: string) => void;
}

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const App: React.FC<UsersTableProps> = ({ users, handleDelete }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state, dispatch } = useContext(UserContext);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns: ColumnsType<IUserData> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href={`edit-user/${record.key}`}>Edit</a>
          <Button
            onClick={() => {
              //@ts-ignore
              showModal();
            }}
          >
            Update Password
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: "DELETE_USER", payload: [record.key] });
              handleDelete(record.key);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleBulkDelete = () => {
    setLoading(true);
    //@ts-ignore
    dispatch({ type: "DELETE_USER", payload: [...selectedRowKeys] });
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Modal
          title="Basic Modal"
          open={visible}
          onOk={handleCancel}
          footer={false}
          onCancel={handleCancel}
        >
          <ChangePasswordForm />
        </Modal>
        <Button
          className="bg-[#1677ff]"
          type="primary"
          onClick={handleBulkDelete}
          disabled={!hasSelected}
          loading={loading}
        >
          Delete
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={users} />
    </div>
  );
};

export default App;
