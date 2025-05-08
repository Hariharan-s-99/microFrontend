import React from "react";
import { createMemoryHistory } from "history";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (element: any) => {
  ReactDOM.render(<App history={history} />, element);

  return {};
};

export { mount };
