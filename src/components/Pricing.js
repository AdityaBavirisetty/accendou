import React, { useState,useEffect} from "react";
import "../styles/Pricing.css";
import { Button } from "@mui/material";
// import Progress from "react-progressbar";
import axios from "axios";

const Pricing = (props) => {
  console.log(props.location,"nannnnnn")
  // const moneyless = props.location.state.Total[0] * 1000000;
  const moneyless = 1000000;
  const [index,setIndex]=useState();

  // const [money, setMoney] = useState(props.location.state.Total[0] * 100000);
  const [percent,setPercent]= useState('100%');

  const percentage = (e,index) => {
        const percents=Math.round((e/moneyless)*100)
        console.log(percents);
        // setMoney(e);
        setPercent(percents+"%")
        setIndex(index);        
  }
  useEffect(() => {
    console.log('jijiiiiii')
    axios.get('http://15.207.104.100:8002/').then(res =>{console.log(res)}).catch(err =>{console.log(err)})
  })
  

  
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
            onClick={() => percentage(moneyless - 10000,0)}
            style={index ==0?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
            
          >
            10,000 Steps
          </Button>
          <Button
            variant="outlined"
            onClick={() => percentage(moneyless - 20000,1)}
            style={index ==1?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
          >
            20,000 Steps
          </Button>
          <Button
            variant="outlined"
            onClick={() => percentage(moneyless - 30000,2)}
            style={index ==2?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
          >
            30,000 Steps
          </Button>
          <Button
            variant="outlined"
            onClick={() => percentage(moneyless - 50000,3)}
            style={index ==3?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
          >
            50,000 Steps
          </Button>
        </div>
      </div>
      {/* <div className="range">
        <input type="range" min="0" max={money} value={money}></input>
        <span>{money}</span>
      </div> */}
      <div className="progress">
        <div
          style={{
            padding: "0px 10px 0px 10px ",
            backgroundColor: "#1976d2",
            height: "7vh",
            color: "white",
            borderRight: "1px solid white",
          }}
        >
          Monthly Pay{props.location.state.price}
        </div>
        <div
          style={{
            width: "98%",
            backgroundColor: "lightgray",
            height: "7vh",
            borderRadius: "10px",
          }}
        >
          <div class="skills html" style={{ width: percent,borderRadius: "0px 10px 10px 0px"}}>
            {percent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
