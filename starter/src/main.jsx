import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" />
    </Provider>
  </React.StrictMode>
);
