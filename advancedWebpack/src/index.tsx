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

const history = createMemoryHistory({initialEntries: ["/v2"]});

ReactDOM.render(
  <Router location={history.location} navigator={history} basename="/v2">
    <App history={history}/>
  </Router>,
  document.getElementById("root")
);
