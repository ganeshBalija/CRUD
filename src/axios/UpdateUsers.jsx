import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../index.css"

function Update() {
    const [value, setValue] = useState({ name: "", email: "" });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:2000/users/${id}`)
            .then(res => setValue(res.data))
            .catch(err => console.error(err));
    }, [id]);

    const change = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };

    const senddata = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:2000/users/${id}`, value)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.error(err));
    };

    return (
        <>
        <div id="updatemainpage">
            <h1 className="updatePage">Welcome to the Update Page</h1>
            <div className="formdiv">
            <form action="" style={{ display: "flex", flexDirection: "column", width: "20vw" }}>
                <input className="upinput"
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={value.name}
                    onChange={change}
                />
                <input className="upinput"                                            
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={value.email}
                    onChange={change}
                />
                <br />
                <button id="update-but" onClick={senddata}>Update</button>
            </form>
            </div>
            </div>
        </>
    );
}

export default Update;

