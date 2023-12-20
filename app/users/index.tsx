"use client";
import React, { useState, useContext, useEffect } from "react";
import UsersTable from "./components/UsersTable";
import usersData from "../../constants/user-data";
import { IUserData } from "../../types/userData.types";
import { UserContext } from "../store/context-provider";

const Users = () => {
  const [users, setUsers] = useState<IUserData[]>(usersData);
  const { state, dispatch } = useContext(UserContext);
  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <UsersTable users={state.usersData} handleDelete={handleDelete} />
    </>
  );
};

export default Users;
