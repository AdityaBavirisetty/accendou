import React from "react";
import { useState } from "react";
import "../styles/Persona.css";
import { Link } from "react-router-dom";

const Persona = () => {
  const [value, SetValue] = useState(0);

  return (
    <div>
      <div className="sticky-filters">
        <div
          className="sticky-filter"
          onClick={() => {
            SetValue(0);
            console.log(value);
          }}
        >
          store front
        </div>
        <div
          className="sticky-filter"
          onClick={() => {
            SetValue(1);
          }}
        >
          Insurance Functions
        </div>
        <div className="sticky-filter" onClick={() => SetValue(2)}>
          Insurance in a box
        </div>
      </div>
      {value === 0 ? (
        <div>
          <div className="per-heading">
            <h4>AI for growth</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <div className="card">
                <a href="http://192.168.3.142:3601/login">Watch Tower</a>
              </div>
              {/* <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div> */}
            </div>
          </div>
          <div className="per-heading">
            <h4>AI for CX</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <div className="card">Recommender</div>
              <div className="card">Converser</div>
            </div>
          </div>
          <div className="per-heading">
            <h4>AI for Intelligent Operations</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <a href="http://15.207.104.100:5000/admin/deals">
                <div className="card">M&A Automation</div>
              </a>
              <a href="http://15.207.104.100:7000/">
                <div className="card">Aviation UW</div>
              </a>
              <a href="http://15.207.104.100:5000/admin/deals">
                <div className="card">UW intelligence</div>
              </a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card">document intelligence</div>
              </a>
              <div className="card">CI Critical risk factor Q&A</div>
            </div>
          </div>
          <div className="per-heading">
            <h4>AI for Risk & Resilience</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <a href="http://15.207.104.100:8080/login">
                <div className="card">Loss run feature Extraction</div>
              </a>
              <a href="http://15.207.104.100:3000/modules"><div className="card">AVA</div></a>
              <div className="card">AP fraud solutions</div>
              <a href="http://192.168.3.142:3601/login">
                <div className="card">Watch Tower</div>
              </a>
            </div>
          </div>
        </div>
      ) : null}
      {value === 1 ? (
        <div>
          <div className="per-heading">
            <h4>Underwriting</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <a href="http://15.207.104.100:5000/admin/deals">
                <div className="card">M&A Automation</div>
              </a>
              <a href="http://15.207.104.100:7000/">
                <div className="card">Aviation UW</div>
              </a>
              <a href="http://15.207.104.100:8888/">
                <div className="card">UW Intelligence</div>
              </a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card">document intelligence</div>
              </a>
              <div className="card">CI Critical risk factor Q&A</div>
            </div>
          </div>
          <div className="per-heading">
            <h4>Claims</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <div className="card">AP fraud Solutions</div>
              <div className="card">Converser</div>
              <div className="card">Extractor</div>
              <div className="card"></div>
            </div>
          </div>
          <div className="per-heading">
            <h4>Sales & Marketing</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <div className="card">Recommender</div>
              <a href="http://192.168.3.142:3601/login">
                <div className="card">Watch Tower</div>
              </a>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
          <div className="per-heading">
            <h4>Pricing</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <a href="http://15.207.104.100:8080/login">
                <div className="card">Loss run feature extraction</div>
              </a>
              <a href="http://15.207.104.100:3000/modules"><div className="card">AVA</div></a>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      ) : null}
      {value === 2 ? (
        <div>
          <div className="per-heading">
            <h4>Insurance in a box</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "35vh",
            }}
          >
            <div className="per-container">
              <Link to="/login">
                <div className="card">Touchless health insurance & Claims</div>
              </Link>
              <div className="card">Car damage detection cv</div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Persona;
