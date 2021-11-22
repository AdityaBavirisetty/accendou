import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Policies.css";
import Button from '@mui/material/Button';

const Policies = (props) => {
    const data={
        0:{
           Name:"Health Care Max",
           Sum_assured:"7 Lacs",
           desciption:{
              Room_rent:"10000 per day",
              Hospitalization:"15 days prior and 45 days of post hospitalization",
              Existing:"post 3 months",
              Claim_bonus:"7% reduction in premium"
           }
        },
        1:{
           Name:"Health Care Diamond",
           Sum_assured:"10 Lacs",
           desciption:{
              Room_rent:"15000 per day",
              Hospitalization:"30 days prior and 45 days of post hospitalization",
              Existing:"post 3 months",
              Claim_bonus:"10% reduction in premium"
           }
        },
        2:{
           Name:"Health Care Max",
           Sum_assured:"10 Lacs",
           desciption:{
              Room_rent:"10000 per day",
              Hospitalization:"15 days prior and 45 days of post hospitalization",
              Existing:"post 3 months",
              Claim_bonus:"7% reduction in premium"
           }
        }
     }
     const quote = (index) => {
        props.history.push({
            pathname: '/pricing',
            state: {
              Total: data[index].Sum_assured,
              Name: data[index].Name
            }
          })

     }

    return (
        <div>
            <div className="title">
            <h1>Based on your details our reccomender engine got 3 policies best suited for you </h1> 
            </div>
            <div className="box pro pro2">
                   Development - 60%<br />
                   Testing - 0% <br /> 
                   Integration - 0%<br />
           </div>
            <div className="policy-boxes">
                <div className="policy-box">
                    <div className="policy-title">
                        <h2>Policy 1 :</h2>
                        <h3>{data[0].Name}</h3>
                    </div>
                    <div className="submi">
                        <Button variant="contained" onClick={()=>quote(0)}>Get quote</Button>
                    </div>
                    <div className="policy-inform">
                        <h3>Information</h3>
                        <b className="b">Room Rent : </b><p>{data[0].desciption.Room_rent}</p>
                       <b className="b"> Hospitalization :</b> <p>{data[0].desciption.Hospitalization}</p>
                       <b className="b"> Existing :</b> <p>{data[0].desciption.Existing}</p>
                       <b className="b"> Claim_bonus : </b>  {data[0].desciption.Claim_bonus}

                    </div>
                    
                </div>
                <div className="policy-box">
                    <div className="policy-title">
                    <h2>Policy 2 :</h2>
                        <h3>{data[1].Name}</h3>
                    </div>
                    <div className="submi">
                    <Button variant="contained" onClick={()=>quote(1)}>Get quote</Button>
                    </div>
                    <div className="policy-inform">
                    <h3>Information</h3>
                        <b className="b">Room Rent : </b><p>{data[1].desciption.Room_rent}</p>
                      <b className="b">  Hospitalization : </b><p>{data[1].desciption.Hospitalization}</p>
                       <b className="b"> Existing : </b><p>{data[1].desciption.Existing}</p>
                       <b className="b"> Claim_bonus :</b>   {data[1].desciption.Claim_bonus}
                    </div>
                    
                </div>
                <div className="policy-box">
                    <div className="policy-title">
                        <h2>Policy 3 :</h2>
                        <h3>{data[2].Name}</h3>
                    </div>
                    <div className="submi">
                    <Button variant="contained" onClick={()=>quote(2)}>Get quote 1333/yr</Button>
                    </div>  
                    <div className="policy-inform ">
                    <h3>Information</h3>
                       <b className="b"> Room Rent : </b><p>{data[2].desciption.Room_rent}</p>
                       <b className="b"> Hospitalization : </b><p>{data[2].desciption.Hospitalization}</p>
                       <b className="b"> Existing : </b><p>{data[2].desciption.Existing}</p>
                       <b className="b"> Claim_bonus :  </b> {data[2].desciption.Claim_bonus}
                    </div>
                    
                </div>
                
            </div>
            <div style={{float:'right',marginRight:'30px'}}>
                    <Button className="bo" variant="outlined">See more</Button>
            </div>
            
        </div>
    )
}

export default Policies;
