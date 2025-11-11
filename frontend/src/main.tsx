import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import React Router
import App from "./App";
import "./index.css"; // ✅ make sure this line exists

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
