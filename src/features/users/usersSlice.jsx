import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const data = await axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("-- err --", err);
    });
  return data;
});

const initialState = {
  value: 0,
  userList: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.userList.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      console.log("nammmmmm", name, email);
      const existingUser = state.userList.find((user) => user.id == id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      //   const deleteUser = state.userList.filter(
      //     (data) => data.id !== action.payload
      //   );
      //   state.userList = deleteUser;
      state.userList.pop(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
