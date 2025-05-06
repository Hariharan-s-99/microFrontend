import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, createMemoryRouter, Router } from "react-router-dom";
import "./styles/main.css";
import App from "./App";
import { createBrowserHistory, createMemoryHistory } from "history";

export interface RouteComponentProps {
  history: any;
  location: any;
  match: any;
}

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter >
    <App history={history}/>
  </BrowserRouter>,
  document.getElementById("root")
);
