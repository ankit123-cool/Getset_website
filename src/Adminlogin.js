import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./firebase";

function Adminlogin() {
  const navigate = useNavigate();

  function handleuserlogin() {
    navigate("/");
  }

  const [admindetails, setadmindetails] = useState({
    adminmail: "",
    adminpassword: "",
  });

  const allowlogin = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        window.localStorage.setItem("token", user.accessToken);

        navigate("/adminpage");
        // ...
      })
      .catch((error) => {
        const pop = {
          adminmail: "",
          adminpassword: "",
        };

        setadmindetails((prev) => {
          return {
            ...prev,
            ...pop,
          };
        });
      });
  };

  function handleadminchange(event) {
    const { value, name } = event.target;

    setadmindetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handlelogin(event) {
    event.preventDefault();

    await allowlogin(admindetails.adminmail, admindetails.adminpassword);
  }

  return (
    <div>
      <div className="container mt-1">
        <div style={{ backgroundColor: "#343a40" }}>
          <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="http://nitp.ac.in/">
              GetSet
            </a>
          </nav>
        </div>

        <form>
          <div class="container mt-4">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="adminmail"
              class="form-control"
              id="exampleInputEmail1"
              onChange={handleadminchange}
              value={admindetails.adminmail}
              aria-describedby="emailHelp"
            />
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="adminpassword"
              class="form-control"
              onChange={handleadminchange}
              value={admindetails.adminpassword}
              id="exampleInputPassword1"
            />
            <br></br>
            <button class="btn btn-dark" onClick={handlelogin}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
