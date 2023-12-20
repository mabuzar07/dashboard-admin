"use client";
import React, { useState, useContext } from "react";
import usersData from "../../constants/user-data";
import { IUserData } from "../../types/userData.types";
import AddUserForm from "./components/UserForm";
import { Col, Row } from "antd";
import { UserContext } from "../store/context-provider";

const Users = () => {
  const { state, dispatch } = useContext(UserContext);
  const addUser = (userData: IUserData) => {
    dispatch({ type: "ADD_USER", payload: userData });
  };
  return (
    <div className="w-[700px] flex items-center justify-center">
      <Row>
        <Col span={24}>
          <AddUserForm addUser={addUser} />
        </Col>
      </Row>
    </div>
  );
};

export default Users;
