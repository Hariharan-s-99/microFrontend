import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import App from "./App";

export interface RouteComponentProps {
  history: any;
  location: any;
  match: any;
}


ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
