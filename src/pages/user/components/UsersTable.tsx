import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IUserData } from "../../../types/userData.types";

interface UsersTableProps {
  users: IUserData[];
  handleDelete: (id: string) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({ users, handleDelete }) => {
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
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href="#">Invite {record.name}</a>
          <Button
            onClick={() => {
              handleDelete(record.key); // Assuming 'id' is the unique identifier/key for each record
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users} rowKey="id" />;
};

export default UsersTable;
