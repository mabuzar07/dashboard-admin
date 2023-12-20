export interface IUser {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string;
}

export interface IUserState {
  usersData: IUser[];
}

export type UserActionTypes =
  | { type: "ADD_USER"; payload: IUser }
  | { type: "DELETE_USER"; payload: [string] }
  | { type: "UPDATE_USER"; payload: IUser }
  | { type: "GET_ALL_USERS" };
