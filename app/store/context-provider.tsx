"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { IUserState, UserActionTypes } from "./store.types";
import usersData from "@/constants/user-data";

const initialState: IUserState = {
  usersData: usersData,
};

const userReducer = (
  state: IUserState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        usersData: [...state.usersData, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        usersData: state.usersData.filter(
          (user) => !action.payload.includes(user.key)
        ),
      };
    case "UPDATE_USER":
      return {
        ...state,
        usersData: state.usersData.map((user) =>
          user.key === action.payload.key ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export const UserContext = createContext<{
  state: IUserState;
  dispatch: Dispatch<UserActionTypes>;
}>({ state: initialState, dispatch: () => null });

export const CounterContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
