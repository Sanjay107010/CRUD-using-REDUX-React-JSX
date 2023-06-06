import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userDeleted } from "./usersSlice";

export function UserList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users?.userList);

  // console.log("getting data", users);
  const handleDelete = (id) => {
    dispatch(userDeleted(id));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Redux CRUD </h1>
      </div>
      <div className="row">
        <div className="two columns">
          {/* <button
            className="button-primary"
            onClick={() => dispatch(fetchUsers())}
          >
            Load users
          </button> */}
        </div>
        <div className="two columns">
          <Link to={`/add-user/`}>
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th style={{ color: "white" }}>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {/* {users.map((data, index) => {
              return <h1 style={{ color: "red" }}>{data?.name}</h1>;
            })} */}
            {users?.map((data, index) => (
              <tr key={index}>
                <td>{data?.id}</td>
                <td>{data?.name}</td>
                <td>{data?.email}</td>
                <td>
                  <button onClick={() => handleDelete(data?.id)}>Delete</button>
                  <Link to={`/edit-user/${data?.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
