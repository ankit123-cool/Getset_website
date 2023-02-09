import logo from "./logo.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  function handlenav(e) {
    navigate(e);
  }

  return (
    <div className="App">
      <div id="q1">
        <video loop autoplay="" muted>
          <source src="vd.mp4" type="video/mp4" />
        </video>
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

        <div
          class="container mt-4"
          style={{
            textAlign: "center",
          }}
        >
          <p id="hd">Still Struggling to find a Freight Carrier near You ?</p>
          <button type="button" class="btn btn-outline-light">
            Go GetSet
          </button>
        </div>
      </div>
      <div className="abs2">
        <h2>Who are customers for GetSet ?</h2>
        <h6>
          People, who are struggling to find a freight carrier near them are the
          customer of GetSet.
        </h6>
      </div>
      <div className="abs">
        <div>
          <h5>How does GetSet work?</h5>
          <p>
            GetSet provides the customer with an interface using which they can
            book their carrier with ease, just by providing some details like:
            <ul>
              <li>Source address</li>
              <li>Destination address</li>
              <li>Type and weight of the item</li>
              <li>and You are done!</li>
            </ul>
          </p>
          <p style={{ fontFamily: "sen", fontWeight: "bold" }}>
            Now GetSet would provide you the list of different freight carriers
            near you, amongst which customer can select anyone considering time
            & price factor
          </p>
          <p
            style={{
              fontFamily: "sen",
              fontWeight: "bold",
              paddingTop: "20px",
            }}
          >
            Contact us
          </p>
          <p style={{ fontFamily: "sen" }}>
            {" "}
            Ankit kumar singh<br></br> 9026523962, ankitrajput22062000@gmail.com
          </p>

          <p style={{ fontFamily: "sen" }}>
            {" "}
            Shyam jaiswal
            <br></br>
            6364024844, jais.shyam@gmail.com
          </p>
        </div>
      </div>
      <div className="pol">
        <p>© 2023 GetSet, LLC. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
