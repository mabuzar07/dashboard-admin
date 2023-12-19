import React, { useState } from "react";
import UsersTable from "./components/UsersTable";
import usersData from "../../constants/user-data";
import { IUserData } from "../../types/userData.types";
import AddUserForm from "./components/UserForm";

const User = () => {
  const [users, setUsers] = useState<IUserData[]>(usersData);
  const handleDelete = (id: string) => {
    const updatedUsers = users.filter((user) => user.key !== id);
    setUsers(updatedUsers);
  };
  const addUser = (userData: IUserData) => {
    setUsers([...users, userData]);
  };
  return (
    <>
      <AddUserForm addUser={addUser} />
      <UsersTable users={users} handleDelete={handleDelete} />
    </>
  );
};

export default User;
