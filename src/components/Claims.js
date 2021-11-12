import React from 'react'
import "../styles/Claims.css";
const Claims = () => {
    return (
        <div style={{display:'flex',justifyContent:'space-between',position:'relative',
        width:'100%',height:'100vh'
        }}>
            <div className="claim-box">
                <label>Doctor's prescription</label>
                  <input type="file" />
                  <label>Medical report</label>
                  <input type="file"/>
                  <label>X-Ray</label>   
                  <input type="file"/>  
           </div>
           <div className="box pro">
                   Development - 100%<br />
                   Testing - ongoing <br /> 
                   Integration - 0%<br />
           </div>
           {/* <div class="div">
                 Development - 100%<br />
                   Testing - ongoing <br /> 
                   Integration - 0%<br />
  </div> */}
           
        </div>
    )
}

export default Claims
