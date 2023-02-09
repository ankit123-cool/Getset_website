import { signOut } from "firebase/auth";
import { auth, db } from "./firebase";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
function Adminpage() {
  const [Survey_data, setSurvey_data] = useState([]);

  const comref = collection(db, "Survey");

  const ssd = async () => {
    getDocs(comref).then((response) => {
      let complaints = [];
      response.docs.map((item) => {
        let a = item.data();
        a = { ...a, id: item.id };

        complaints = [...complaints, a];
      });

      const fgh = complaints.sort((x, y) => {
        return new Date(y.Date_of_complaint) - new Date(x.Date_of_complaint);
      });

      setSurvey_data(fgh);
    });
  };

  useEffect(() => {
    ssd();
  }, []);

  const navigate = useNavigate();
  const handleadminLogOut = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.localStorage.removeItem("token");
        navigate("/adminlogin");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div className="container mt-1">
        <div style={{ backgroundColor: "#343a40" }}>
          <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="http://nitp.ac.in/">
              GetSet
            </a>
            <ul class="navbar-nav mr-0">
              <li class="nav-item">
                <button
                  className="btn btn-outline-success"
                  onClick={handleadminLogOut}
                >
                  Log out
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name of firm</th>
              <th scope="col">Type of firm</th>
              <th scope="col">Total customer visits</th>
              <th scope="col">Customer requiring transport</th>
              <th scope="col">Customer Proximity</th>
              <th scope="col">Contact no.</th>
              <th scope="col">Opinion</th>
            </tr>
          </thead>
          <tbody>
            {Survey_data.map((item) => {
              return (
                <tr>
                  <th scope="row"> {new Date(item.date)?.toDateString()}</th>
                  <td>{item.name_of_firm}</td>
                  <td>{item.type_of_firm}</td>
                  <td>{item.total_customer_visit}</td>
                  <td>{item.customer_requiring_transport}</td>
                  <td>{item.customer_proximity}</td>
                  <td>{item.contact_number}</td>
                  <td>{item.app_opinion}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Adminpage;
