import axios from "axios";
import React, { useEffect, useState } from "react";

function Data(){
    let[api,setapi]=useState([])
    useEffect(()=>{
    //    fetch("http://localhost:2020/users").then((x)=>{
    //     return x.json()
    //    }).then((data)=>{
    //    console.log(data);
    //    })

    axios.get("http://localhost:2000/users").then((x)=>{
    //    console.log(x.data);
    setapi(x.data)
       })
    })

    return(
        <>
        <h1>Data fetching</h1><br />
        <button>Add+</button>
        <table border={1}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th></th>
                </tr>
            </thead>
            {api.map((x)=>{
            return(
                <>
                <tbody>
                    <tr>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
                </>
            )
        })}
        </table>
       
        </>
    )
}
export default Data