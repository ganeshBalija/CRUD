import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Add() {
  let [value, setvalue] = useState({ name: "", email: "" });
  let change = e => {
    setvalue({ ...value, [e.target.name]: [e.target.value] });
  };
  // console.log(value)
  let navigate = useNavigate();
  let sendData = e => {
    e.preventDefault();
    axios.post("http://localhost:2000/users", value).then(res => {
      navigate("/");
    });
  };
  let toCancel = () => {
    navigate("/");
  };
  return (
    <>
      <div id="add-page">
        <form action="">
          <h1>Add Your Information</h1>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={value.name}
            onChange={change}
          />
          <br />
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            value={value.email}
            onChange={change}
          />
          <br />
          {/* <button>Add</button> */}
          <button id="add-but" onClick={sendData}>
            {" "}
            ADD DATA
          </button>
          <button id="cancel-but" onClick={toCancel}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}
export default Add;
