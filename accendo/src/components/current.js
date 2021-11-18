import React, { useState } from "react";
import Webcam from "react-webcam";
import "../styles/current.css";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const Current = () => {
  let history = useHistory();
  const webcamRef = React.useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [camon, setCamon] = useState(false);

  const videoConstraints = {
    width: 1280,
    height: 650,
    facingMode: "user",
  };
  const capture = React.useCallback(() => {
    //const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  const loginFun=()=>{
    setTimeout(() => {
      capture()
    },5000)
    setTimeout(() => {
      history.push('/login')
    },5000)
 }
  return (
    <div>
      <div className="camera-container">
        {camon !== false ? (
          <div>
            <Webcam
              mirrored={true}
              ref={webcamRef}
              videoConstraints={videoConstraints}
              onUserMedia={loginFun}
              onUserMediaError={(e) => {console.log(e,"media error")}}
            ></Webcam>
            {/* <button onClick={capture}>Capture photo</button>
            <button
              onClick={() => {
                setCamon(false);
              }}
            >
              camera off
            </button> */}
          </div>
        ) : (
          <div className="login-box">
            <h1 className="note">Welcome to the world of Health care! </h1>
            <div className="box pro" style={{fontSize:'20px'}}>
                   Development - 100%<br />
                   Testing - ongoing <br /> 
                   Integration - 0%<br />
           </div>
            <div className='button-div'>
            <Button variant="contained"
              onClick={() => {
                setCamon(true);
                  //loginFun()
              }}
            >
              Enter
            </Button>
            </div>
          </div>
        )}
      </div>
      {/* <div>
        {imageSrc !== null ? (
          <img
            src={imageSrc}
            alt="wait"
            style={{ height: "300px", width: "300px" }}
          />
        ) : null}
      </div> */}
    </div>
  );
};

export default Current;
