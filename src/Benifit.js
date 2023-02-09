import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
function Benifit() {
  const navigate = useNavigate();

  function handlenav(e) {
    navigate(e);
  }
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
          <h2>Why GetSet ?</h2>
          <h4>GetSet takes care of all logistic needs for you.</h4>
        </div>
      </div>
      <div className="dv2">
        <h3>Our Vision</h3>
        <ul>
          <li>We remove the middleware between the customer and the driver.</li>
          <li>We allow our customers to book freight carriers easily.</li>
          <li>We ensure fast, cost effective deliveries at ease.</li>
        </ul>
      </div>

      <div className="dv3">
        <h3>Problems in Conventional systems</h3>
        <p>
          Nowadays if we are looking to hire a transport vehicle, there comes
          few challenges
          <ul>
            <li>
              Very less chances of getting a freight carrier for serving in
              rural areas
            </li>
            <li>Charges would not be ideal</li>
          </ul>
        </p>
      </div>

      <div className="dv4">
        <h3>Our Pricing Algorithm</h3>
        <p>
          We all are aware that the fare which we are charged while booking
          through conventional systems, are inclusive of fare of both sides of
          journey, for example, If we are to go from a source to a destination
          then we would have to pay twice the charge of one side of journey
          because the driver would charge us considering the fact that he would
          be coming without any parcels.
        </p>
        <p>
          We here at GetSet charge you only the fare for only the one side of
          journey, which is based on the kilometers of journey and the
          destination
        </p>
      </div>
      <div className="pol">
        <p>© 2023 GetSet, LLC. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Benifit;
