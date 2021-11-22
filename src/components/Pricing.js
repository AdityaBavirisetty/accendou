import React, { useState } from "react";
import "../styles/Pricing.css";
import { Button } from "@mui/material";
const Pricing = (props) => {
  const moneyless = props.location.state.Total[0] * 100000;

  const [money, setMoney] = useState(props.location.state.Total[0] * 100000);

  console.log(props.location.state);
  return (
    <div>
      <div className="pol-details">
        <div className="prim-det">
          policy 1 details
          <br />
          Development - 70%
          <br />
          Testing - 0% <br />
          Integration - 0%
          <br />
          <p>
            <b>{props.location.state.Name}</b>
          </p>
          <p>
            <b>{props.location.state.Total}</b>
          </p>
        </div>
        <div className="prim-det">
          connected devices (Watch)
          <Button
            variant="outlined"
            onClick={() => setMoney(moneyless - 10000)}
          >
            10,000 Runs
          </Button>
          <Button
            variant="outlined"
            onClick={() => setMoney(moneyless - 20000)}
          >
            20,000 Runs
          </Button>
          <Button
            variant="outlined"
            onClick={() => setMoney(moneyless - 30000)}
          >
            30,000 Runs
          </Button>
          <Button
            variant="outlined"
            onClick={() => setMoney(moneyless - 50000)}
          >
            50,000 Runs
          </Button>
        </div>
      </div>
      <div className="range">
        <input type="range" min="0" max={money} value={money}></input>
        <span>{money}</span>
      </div>
    </div>
  );
};

export default Pricing;
