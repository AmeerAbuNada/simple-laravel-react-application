import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
);
