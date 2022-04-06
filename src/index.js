import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  /*BrowserRouter needs to be here for it to work*/
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
