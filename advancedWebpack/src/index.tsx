import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, createMemoryRouter, Router } from "react-router-dom";
import "./styles/main.css";
import App from "./App";
import { createMemoryHistory } from "history";

export interface RouteComponentProps {
  history: any;
  location: any;
  match: any;
}

const history = createMemoryHistory({initialEntries: ["/"]});

ReactDOM.render(
  <Router location={history.location} navigator={history}>
    <App history={history}/>
  </Router>,
  document.getElementById("root")
);
