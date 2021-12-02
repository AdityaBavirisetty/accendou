import React, { useState } from "react";
import Webcam from "react-webcam";
import "../styles/current.css";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import axios from "axios";

const Current = (props) => {
  let history = useHistory();
  const webcamRef = React.useRef(null);
  const [imageSrc, setImageSrc] = useState();
  const [camon, setCamon] = useState(false);
  const [data,setData]=useState(null);
  const [file,setFile]=useState()

  const videoConstraints = {
    width: 1280,
    height: 650,
    facingMode: "user",
  };
  

  const capture = React.useCallback(
    async () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImageSrc(imageSrc);
      //console.log(imageSrc,'src')
     setFile(dataURLtoFile(imageSrc, 'test_image.jpg'));
     console.log(dataURLtoFile(imageSrc, 'test_image.jpg'),"photo")
     console.log(file,"file")
       //console.log(file,'fileeeee');
    //   const blob = await fetch(imageSrc).then((res) => res.blob());
       const formData = new FormData();
       formData.append('file', file)
      //console.log(formData, 'form')

      // axios.post('http://15.207.104.100:8005/upload', formData,{
      //     headers: {
      //         'content-type': 'multipart/form-data'
      //     },
      //     mode: 'no-cors'
      //   }).then(res=>console.log(res))
      axios.get('http://15.207.104.100:8008/face_detection').then(res=>{setData(res.data)})
      setTimeout(() => {
        console.log(data,"daata")
        props.history.push({
          pathname: '/policies',
          // state: {
          //   Name: res.data.Name,
          //   age: res.data.age,
          //   gender:res.data.gender
          // }
        })
      }, 70000)
     },
    [webcamRef]
  )

  const dataURLtoFile=(dataurl, filename)=> {

    var arr = dataurl.split(','),
       mime = arr[0].match(/:(.*?);/)[1],
       bstr = atob(arr[1]),
       n = bstr.length,
       u8arr = new Uint8Array(n);

    while (n--) {
       u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {
       type: mime
    });
 }

  const loginFun = () => {
    // axios.get('http://15.207.104.100:8005/files/delete/test_image.jpg').then(res=>console.log(res,"delete"))
    
    setTimeout(async() => {
       capture()
    }, 1000)
    
    // setTimeout(() => {
    //   console.log(data,"daata")
    //   props.history.push({
    //     pathname: '/policies',
    //     state: {
    //       Name: data!==null?data.Name:null,
    //       age: data!==null?data.age:null,
    //       gender:data!==null?data.gender:null
    //     }
    //   })
    // }, 7000)
  }
  // const posting=(image)=>{
  //   console.log(image,"image")
  //   //const img=new FormData();
  //   //img.append("file",image)
  //   const config = {
  //     headers:{
  //       'content-type':'multipart/form-data'
  //     }
  //   }
  //   // console.log(img,'form')
  //   axios.post("http://localhost:8080/upload",image,config).then(res=>console.log(res))
  // }
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
              onUserMediaError={(e) => { console.log(e, "media error") }}
            ></Webcam>
            {/* <button onClick={capture}>Capture photo</button>
            <button
              onClick={() => {
                setCamon(false);
              }}
            >
              camera off
            </button> */}
            <img src={file} alt="wait"/>
          </div>
        ) : (
          <div className="login-box">
            <h1 className="note">Welcome to the world of Health care! </h1>
            {/* <div className="box pro" style={{ fontSize: '20px' }}>
              Development - 100%<br />
              Testing - ongoing <br />
              Integration - 0%<br />
            </div> */}
            <div className='button-div'>
              <Button variant="contained"
                onClick={() => {
                  setCamon(true);
                  
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
