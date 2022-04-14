import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  /*BrowserRouter needs to be here for it to work*/
  <BrowserRouter basename={window.location.pathname || ""}>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
