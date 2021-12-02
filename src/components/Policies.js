import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Policies.css";
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect ,useState} from "react";
import Skeleton from '@mui/material/Skeleton';

const Policies = (props) => {
    //console.log(props.location.state)
    const [data,setData]=useState(
        // {
    //     0:{
    //        Name:"Health Care Max",
    //        Sum_assured:"7 Lacs",
    //        desciption:{
    //           Room_rent:"10000 per day",
    //           Hospitalization:"15 days prior and 45 days of post hospitalization",
    //           Existing:"post 3 months",
    //           Claim_bonus:"7% reduction in premium"
    //        }
    //     },
    //     1:{
    //        Name:"Health Care Diamond",
    //        Sum_assured:"10 Lacs",
    //        desciption:{
    //           Room_rent:"15000 per day",
    //           Hospitalization:"30 days prior and 45 days of post hospitalization",
    //           Existing:"post 3 months",
    //           Claim_bonus:"10% reduction in premium"
    //        }
    //     },
    //     2:{
    //        Name:"Health Care Max",
    //        Sum_assured:"10 Lacs",
    //        desciption:{
    //           Room_rent:"10000 per day",
    //           Hospitalization:"15 days prior and 45 days of post hospitalization",
    //           Existing:"post 3 months",
    //           Claim_bonus:"7% reduction in premium"
    //        }
    //     }
    //  }
    null)
    const [data2,setData2]=useState(null)
    
     useEffect(() => {
        
        axios.get('http://15.207.104.100:8008/face_detection').then(res=>setData2(res.data))
        axios.get('http://15.207.104.100:8003/product').then(res=>{console.log(res);
        setData(res.data)
        
    })
    },[])



     const quote = (index,type) => {
        props.history.push({
            pathname: '/userdetails',
            state: {
              Total: data!==null?data[index].Sum_assured:null,
              Name: data!==null?data[index].Name:null,
              category:type
            }
          })

     }
     

    return (
        <div>
            <div className="title">
            <h1 style={{opacity:'100'}}>Based on your details our recomender engine got 3 policies best suited for you </h1> 
            </div>
            <div className="box pro pro2">
                   {/* Development - 60%<br />
                   Testing - 0% <br /> 
                   Integration - 0%<br /> */}
                   Name: {data2!==null?data2.Name:null}<br/>
                   Age: {data2!==null?data2.age:null}<br/>
                   Gender: {data2!==null?data2.gender:null}
           </div>
            <div className="policy-boxes">
                <div className="policy-box">
                    <div className="policy-title">
                        <h2>Gold Policy :</h2>
                        <h3>{data!==null?data[0].Name:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</h3>
                    </div>
                    <div className="submi">
                        <Button variant="contained" onClick={()=>quote(0,"Gold")}>Get quote</Button>
                    </div>
                    <div className="policy-inform">
                        <h3>INFORMATION</h3>
                        <b className="b">Room Rent : </b><p>{data!==null?data[0].desciption.Room_rent:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> Hospitalization :</b> <p>{data!==null?data[0].desciption.Hospitalization:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> Existing :</b> <p>{data!==null?data[0].desciption.Existing:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> No Claim bonus : </b>  {data!==null?data[0].desciption.Claim_bonus:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}

                    </div>
                    
                </div>
                <div className="policy-box">
                    <div className="policy-title">
                    <h2>Diamond Policy :</h2>
                        <h3>{data!==null?data[1].Name:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</h3>
                    </div>
                    <div className="submi">
                    <Button variant="contained" onClick={()=>quote(1,"Diamond")}>Get quote</Button>
                    </div>
                    <div className="policy-inform">
                    <h3>INFORMATION</h3>
                    <b className="b">Room Rent : </b><p>{data!==null?data[1].desciption.Room_rent:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> Hospitalization :</b> <p>{data!==null?data[1].desciption.Hospitalization:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> Existing :</b> <p>{data!==null?data[1].desciption.Existing:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> No Claim bonus : </b>  {data!==null?data[1].desciption.Claim_bonus:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}
                    </div>
                    
                </div>
                <div className="policy-box">
                    <div className="policy-title">
                        <h2>Platinum Policy:</h2>
                        <h3>{data!==null?data[2].Name:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</h3>
                    </div>
                    <div className="submi">
                    <Button variant="contained" onClick={()=>quote(2,"Platinum")}>Get quote</Button>
                    </div>  
                    <div className="policy-inform ">
                    <h3>INFORMATION</h3>
                    <b className="b">Room Rent : </b><p>{data!==null?data[2].desciption.Room_rent:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> Hospitalization :</b> <p>{data!==null?data[2].desciption.Hospitalization:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> Existing :</b> <p>{data!==null?data[2].desciption.Existing:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}</p>
                       <b className="b"> No Claim bonus : </b>  {data!==null?data[2].desciption.Claim_bonus:<Skeleton animation="wave" sx={{ bgcolor: 'whitesmoke' }}/>}
                    </div>
                    
                </div>
                
            </div>
            {/* <div style={{float:'right',marginRight:'30px'}}>
                    <Button className="bo" variant="outlined">See more</Button>
            </div> */}
            
        </div>
    )
}

export default Policies;
