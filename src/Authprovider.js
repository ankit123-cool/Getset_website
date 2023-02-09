import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isSignInWithEmailLink } from "firebase/auth";
import { auth } from "./firebase";

const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState("loading");

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (isLoggedIn == "loading") {
    return <div>Loading...</div>;
  } else if (isLoggedIn === true) {
    return props.children;
  } else {
    navigate("/adminlogin");
  }
};

export default AuthProvider;
