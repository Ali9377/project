import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  name: string;
  vacancy: string;
  phone: string;
}

interface InitialState {
  users: User[];
}

const initialState: InitialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleAdd: (state: InitialState, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    handleDelete: (state: InitialState, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.name !== action.payload);
    },
    handleReset: (state) => {
      state.users.length = 0;
    },
    searchUser: (state: InitialState, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      state.users = initialState.users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
    },
  },
});

export const { handleAdd, handleDelete, handleReset, searchUser } = userSlice.actions;
export default userSlice.reducer;
