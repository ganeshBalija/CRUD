import React from "react";
import ReactDom from "react-dom/client"


import App from "./App";
import Data from "./Data";
import { BrowserRouter, Route, Router } from "react-router-dom";

let root=ReactDom.createRoot(document.getElementById("root"))
root.render(
 <App></App>
)