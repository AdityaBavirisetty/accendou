import React from 'react'
import "../styles/Pricing.css";
const Pricing = () => {
    return (
        <div>
            <div className="pol-details">
            <div className="prim-det">policy 1 details<br />
            Development - 70%<br />
                   Testing - 0% <br /> 
                   Integration - 0%<br />
            </div>
            <div className="prim-det">connected devices</div>
            
            </div>
            <div className="range"><input type="range"></input></div>
        </div>
    )
}

export default Pricing
