import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { userUpdated } from "./usersSlice";

export function EditUser() {
  const { pathname } = useLocation();
  const userId = pathname.replace("/edit-user/", "");
  //   console.log("user id: " + userId);
  const users = useSelector((state) => state.users?.userList);
  //   console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", users);

  const user = useSelector((state) =>
    state.users.userList.find((userList) => userList.id == userId)
  );
  //   console.log("ueeeeeeeser", user);
  //   console.log("ueeeeeeeser", user.name);
  //   console.log("ueeeeeeeser", user.email);

  const dispatch = useDispatch();
  //   //   const history = useHistory();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleClick = () => {
    if (name && email) {
      dispatch(
        userUpdated({
          id: userId,
          name,
          email,
        })
      );

      setError(null);
      //   history.push("/");
      navigate("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
