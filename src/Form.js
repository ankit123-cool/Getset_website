import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { auth, db } from "./firebase";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
function Form() {
  const navigate = useNavigate();
  const comref = collection(db, "Survey");
  function handlenav(e) {
    navigate(e);
  }
  const [formdata, setformdata] = useState({
    name_of_firm: "",
    type_of_firm: "",
    customer_visits: "",
    customer_requiring_transport: "",
    customer_proximity: "",
    contact: "",
    app_acceptance: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setformdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const handlesubmit = async (event) => {
    console.log("god");
    event.preventDefault();

    const d = new Date();
    let valid = true;
    if (formdata.contact.length != 10) {
      valid = false;
    }

    for (let i = 0; i < formdata.contact.length; i++) {
      if (!(formdata.contact[i] >= 0 && formdata.contact[i] <= 9)) {
        valid = false;
        break;
      }
    }
    //hi there

    if (valid === true) {
      console.log("mnjnjnjn");
      await addDoc(comref, {
        name_of_firm: formdata.name_of_firm,
        type_of_firm: formdata.type_of_firm,
        total_customer_visit: formdata.customer_visits,
        customer_requiring_transport: formdata.customer_requiring_transport,
        customer_proximity: formdata.customer_proximity,
        contact_number: formdata.contact,
        app_opinion: formdata.app_acceptance,
        date: d.toISOString(),
      });

      const pop = {
        name_of_firm: "",
        type_of_firm: "",
        customer_visits: "",
        customer_requiring_transport: "",
        customer_proximity: "",
        contact: "",
        app_acceptance: "",
      };

      setformdata(pop);
      //after adding complaint to database we set input fields to default values ex.statusofcomplaint: "Registered", as next time this will only decide new status
      window.alert("success");
    } else {
      window.alert("failed");
    }
  };

  return (
    <div className="App">
      <div id="q2">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#" id="head">
              GetSet
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item" onClick={() => handlenav("/")}>
                  <a
                    style={{ fontFamily: "sen", fontWeight: "bold" }}
                    class="nav-link active"
                    aria-current="page"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item" onClick={() => handlenav("/whywe")}>
                  <a
                    style={{ fontFamily: "sen", fontWeight: "bold" }}
                    class="nav-link active"
                    href=""
                  >
                    Why we?
                  </a>
                </li>
                <li class="nav-item" onClick={() => handlenav("/form")}>
                  <a
                    style={{ fontFamily: "sen", fontWeight: "bold" }}
                    class="nav-link active"
                    href=""
                  >
                    Survey form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="form">
          <h2>Survey Form</h2>
          <h4>Please fill out this form</h4>
        </div>
      </div>
      <div class="form">
        <form className="fm">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label form-label-light">
              Name of Firm/Industry
            </label>
            <input
              type="text"
              class="form-control "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name_of_firm"
              value={formdata.name_of_firm}
              onChange={handlechange}
              placeholder="Enter the name of Your Firm/Industry"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Type of Firm/Industry
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="type_of_firm"
              value={formdata.type_of_firm}
              onChange={handlechange}
              placeholder="Type of Firm/Industry"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Total Number of Customer visits
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="customer_visits"
              value={formdata.customer_visits}
              onChange={handlechange}
              placeholder="Daily number of customer visits"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Total Number of Customer requiring Transport Vehicle
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="customer_requiring_transport"
              value={formdata.customer_requiring_transport}
              onChange={handlechange}
              placeholder="Number of customer requiring transport"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Customer Proximity
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="customer_proximity"
              value={formdata.customer_proximity}
              onChange={handlechange}
              placeholder="How far from customers come?"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Contact Number
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="contact"
              value={formdata.contact}
              onChange={handlechange}
              placeholder="Enter your contact details"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Your opinion about GetSet app acceptance
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              name="app_acceptance"
              value={formdata.app_acceptance}
              onChange={handlechange}
              placeholder="% of customer, who would use GetSet app"
            />
          </div>
          <button type="submit" onClick={handlesubmit} className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
      <div className="pol">
        <p> © 2023 GetSet, LLC. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Form;
