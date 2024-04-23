import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./main";
import reportWebVitals from "./reportWebVitals";
import Core from "./Core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Core />
  </React.StrictMode>
);

reportWebVitals();
