import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./app/store";

import { RouterProvider } from "react-router-dom";
import router from "./app/router";

import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId = "228037008458-kvvkf08qgiroec2r5vg1olqvo606n5ad.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
