import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { UserList } from "./features/users/UserList";
import { AddUser } from "./features/users/AddUser";
import { EditUser } from "./features/users/EditUser";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/edit-user/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
