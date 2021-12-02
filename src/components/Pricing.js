import React, { useState,useEffect} from "react";
import "../styles/Pricing.css";
import { Button } from "@mui/material";
// import Progress from "react-progressbar";
import axios from "axios";

const Pricing = (props) => {
  console.log(props.location,"nannnnnn")
  // const moneyless = props.location.state.Total[0] * 1000000;
  const moneyless = parseFloat(props.location.state.price).toFixed(2);
  const [index,setIndex]=useState();

  const [money, setMoney] = useState(parseFloat(props.location.state.price).toFixed(2));
  const [percent,setPercent]= useState('100%');

  const percentage = (e,index) => {
        const percents=Math.round((e/moneyless)*100)
        console.log(percents);
        // setMoney(e);
        setPercent(percents+"%")
        setMoney(parseFloat(e).toFixed(2))
        setIndex(index);        
  }
  // useEffect(() => {
  //   console.log('jijiiiiii')
  //   axios.get('http://15.207.104.100:8002/').then(res =>{console.log(res)}).catch(err =>{console.log(err)})
  // })
  

  
  return (
    <div>
      <div className="pol-details">
        <div className="prim-det">
          {/* policy 1 details
          <br />
          Development - 70%
          <br />
          Testing - 0% <br />
          Integration - 0%
          <br /> */}
          <p>
            <b>{props.location.state.Name}</b>
          </p>
          <p>
           Coverage Amount: <b>{props.location.state.Total.length==7?props.location.state.Total.substring(0,2)+" "+"LACS":props.location.state.Total.substring(0,1)+" "+"LACS"}</b>
          </p>
          <p>Annual Premium: {money}</p>
        </div>
        <div className="prim-det">
         <p> Workout data(Connected devices)</p>
          <Button
            variant="outlined"
            onClick={() => percentage(moneyless - 1000,0)}
            style={index ==0?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
            
          >
            1,000 Steps
          </Button>
          <Button
            variant="outlined"
            onClick={() => percentage(moneyless - 2000,1)}
            style={index ==1?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
          >
            3,000 Steps
          </Button>
          <Button
            variant="outlined"
            onClick={() => percentage(moneyless - 3000,2)}
            style={index ==2?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
          >
            5,000 Steps
          </Button>
          <Button
            variant="outlined"
            onClick={() => percentage(moneyless - 5000,3)}
            style={index ==3?{backgroundColor:'#1976d2',color:'#ffffff'}:null}
          >
            10,000 Steps
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
            
            width:'160px'
          }}
        >
          Yearly Premium<br/>
          
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
