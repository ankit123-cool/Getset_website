import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Form from "./Form";
import Benifit from "./Benifit";
import reportWebVitals from "./reportWebVitals";
import Adminlogin from "./Adminlogin";
import Adminpage from "./Adminpage";
import AuthProvider from "./Authprovider";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route
          path="/adminpage"
          element={
            <AuthProvider>
              <Adminpage />
            </AuthProvider>
          }
        />
        <Route path="/whywe" element={<Benifit />} />
        <Route path="/form" element={<Form />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
