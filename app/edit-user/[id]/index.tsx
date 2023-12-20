"use client";
import React, { useState } from "react";
import usersData from "../../../constants/user-data";
import { IUserData } from "../../../types/userData.types";
import AddUserForm from "./components/UserForm";
import { Col, Row } from "antd";
import EditUserForm from "./components/UserForm";
import { useRouter } from "next/router";

const Users = () => {
  const [users, setUsers] = useState<IUserData[]>(usersData);

  const editUser = (userData: IUserData) => {
    setUsers([...users, userData]);
  };
  return (
    <div className="w-[700px] flex items-center justify-center">
      <Row>
        <Col span={24}>
          {/* @ts-ignore */}
          <EditUserForm editUser={editUser} />
        </Col>
      </Row>
    </div>
  );
};

export default Users;
