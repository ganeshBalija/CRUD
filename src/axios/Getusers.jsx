import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link,useNavigate,} from "react-router-dom";

function GetUser() {
  const [api, apiSet] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/users")
      .then(response => {
        const data = response.data;
        apiSet(data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  });

  let x = useNavigate();
  let nav = () => {
    x("/add");
  };

  let remove = id => {
    axios.delete(`http://localhost:2000/users/${id}`)
  };

  return (
    <div id="getBody">
      <div id="getbody-subDiv">
        <h1>Welcome to Data Base</h1>
        <button id="addbutton" onClick={nav}>
          Add+
        </button>
        <table
          border="1px"
          style={{
            width: "80%",
            borderCollapse: "collapse",
            margin: "90px",
            textAlign: "center",
          }}
        >
          <thead key={x.id} style={{}}>
            <tr
              style={{
                backgroundColor: "#556d75",
                border: "none",
                fontSize: "20px",
                height: "50px",
              }}
            >
              <th>Id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {api.map(res => (
              <tr key={res.id} style={{ height: "10vh" }}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>
                  <Link to={`/update/${res.id}`}>
                    <button
                      className="butt"
                      style={{ backgroundColor: "rgb(101, 227, 73)" }}
                    >
                      update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="butt"
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      remove(res.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetUser;
