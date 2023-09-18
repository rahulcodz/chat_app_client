import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../graphql/queries";
import CreateUser from "./createUser";

function GetUserList() {
  const { data } = useQuery(LOAD_USERS);
  const [user, setUser] = useState([]);
  const [updateData, setUpdatdata] = useState();
  useEffect(() => {
    if (data) {
      setUser(data.getAllUsers);
    }
  }, [data]);

  const handleUpdate = (id) => {
    setUpdatdata(id);
  };
  const handleDelete = (id) => {
    console.log(id.id);
  };

  return (
    <div>
      <div>
        <CreateUser {...updateData} />
      </div>
      {user.map((item) => {
        return (
          <div className="user-list" key={item.id}>
            <span>{item.firstName}</span>-<span>{item.lastName}</span>
            <span>{item.email}</span>
            <span>{item.password}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleUpdate(item);
              }}
              className="button"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete(item);
              }}
              className="button"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default GetUserList;
