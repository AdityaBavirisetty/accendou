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
          AI for Digital Insurer
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
          On Demand Solutions
        </div>
      </div>
      {value === 0 ? (
        <div>
          <div className="per-heading">
            <h4>AI for Intelligent operations</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <div className="card">
                <a href="http://15.207.104.100:7000/">U/W Automation</a>
              </div>
              <a href="http://15.207.104.100:9000/home">
                <div className="card">Document intelligence</div>
              </a>
              <a href="http://15.207.104.100:8888/">
                <div className="card">Risk Discovery(external data)</div>
              </a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card grey-color">Touchless claims</div>
              </a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card">Integrated U/W Tool</div>
              </a>
              {/* <div className="card"></div>
                            <div className="card"></div>
                            <div className="card"></div> */}
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
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
            <Link to="/loginclaim">
            
                <div className="card">Claims Fraud Detection</div>
              </Link>
              <a href="http://192.168.3.142:3601/login">
                <div className="card">Profitability Watchtower</div>
              </a>
              <Link to="/excel">
                <div className="card">Finance Compliance</div>
              </Link>
              <a href="http://15.207.104.100:9000/home">
                <div className="card">Car Damage Detection</div>
              </a>
              <a href="#">
                <div className="card">Disease Classification</div>
              </a>
              <a href="#">
                <div className="card grey-color">Cat Risk Estimation</div>
              </a>
            </div>
          </div>
          <div className="per-heading">
            <h4>AI for Growth</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <Link to="/policies">
                <div className="card">Policy & Price Recommender</div>
              </Link>
              <a href="#">
                <div className="card grey-color">Guided Selling for Brokers</div>
              </a>
              <a href="#">
                <div className="card grey-color">Agent Optimization</div>
              </a>
            </div>
          </div>
          <div className="per-heading">
            <h4>AI for Customer Support</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <a href="#">
                <div className="card grey-color">CX Watchtower</div>
              </a>
              
              <div className="card grey-color">Capacity Optimization</div>
              <a href="#">
                <div className="card grey-color">Omni-Channel self-service</div>
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
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <a href="http://15.207.104.100:5000/admin/deals">
                <div className="card">U/W Automation</div>
              </a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card">Document Intelligence</div>
              </a>
              <a href="http://15.207.104.100:8888/">
                <div className="card">Risk Discovery(external data)</div>
              </a>
              <a href="http://15.207.104.100:5000/admin/deals">
                <div className="card">Integrated U/W Tool</div>
              </a>
              <div className="card grey-color">Underwriter Search Engine</div>
              <a href="#">
                <div className="card grey-color">CAT Risk Estimation</div>
              </a>
            </div>
          </div>
          <div className="per-heading">
            <h4>Claims & Fraud</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
            <Link to="/loginclaim">
              <div className="card">Claims Fraud Detection</div></Link>
              <div className="card">Car Damage Detection</div>
              <div className="card">Disease Classification</div>
              <a href="http://15.207.104.100:9000/home">
                <div className="card">Finance Compliance</div>
              </a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card grey-color">Automated Claims Triage</div>
              </a>
              {/* <div className="card"></div> */}
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
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <Link to="/policies">
              <div className="card">Ploicy & Price Recommender</div></Link>
              <a href="http://192.168.3.142:3601/login">
                <div className="card grey-color">Guided Selling for Brokers</div>
              </a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card grey-color">Agent Route Optimization</div>
              </a>
            </div>
          </div>
          <div className="per-heading">
            <h4>Actuarial & Pricing</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <a href="http://15.207.104.100:8080/login">
                <div className="card grey-color">Loss Ratio Watchtower</div>
              </a>
              <a href="http://15.207.104.100:3000/modules"><div className="card grey-color">Reserve Simulation</div></a>
              <a href="http://15.207.104.100:9000/home">
                <div className="card grey-color">Pay-as-you-go Insurance</div>
              </a>
            </div>
          </div>
          <div className="per-heading">
            <h4>Analytics</h4>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <a href="http://15.207.104.100:8080/login">
                <div className="card grey-color">Automodeller</div>
              </a>
              <a href="http://15.207.104.100:3000/modules"><div className="card grey-color">DQ Watchtower</div></a>
              
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
              paddingTop:'25px',
              paddingBottom:'10px'
            }}
          >
            <div className="per-container">
              <Link to="/login">
                <div className="card">Health Insurance Customer Management</div>
              </Link>
              
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Persona;
