import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Add from "./axios/AddUsers";
import GetUser from "./axios/Getusers";
import Update from "./axios/UpdateUsers";
import Error from "./axios/Error";
import Data from "./Data";
import "./index.css"
function App(){
    return(
        <BrowserRouter>
    <Routes>
      {/* <Route path="/data" element={<Data></Data>}></Route> */}
      <Route path="/"element={<GetUser></GetUser>}></Route>
      <Route path="/update/:id" element={<Update></Update>}></Route>
      <Route path="/add" element={<Add></Add>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default App