import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routs/Routs.jsx";
import AuthProvaider from "./Provaider/AuthProvaider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvaider>
      <div className="max-w-7xl mx-auto ">
        <RouterProvider router={router} />
      </div>
    </AuthProvaider>
  </React.StrictMode>
);
