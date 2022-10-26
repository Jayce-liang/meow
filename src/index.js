import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// MUI 的  normailize.css
import CssBaseline from "@mui/material/CssBaseline";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>
);
