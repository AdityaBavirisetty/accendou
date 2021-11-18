import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Policies.css";

const Policies = () => {
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
                    policy 1
                </div>
                <div className="policy-inform">
                    information
                </div>
                <div className="submi">
                    <Link to="/pricing">get quote</Link>
                </div>
            </div>
            <div className="policy-box">
                <div className="policy-title">
                    policy 2
                </div>
                <div className="policy-inform">
                    information
                </div>
                <div className="submi">
                    get quote
                </div>
            </div>
            <div className="policy-box">
                <div className="policy-title">
                    policy 3
                </div>
                <div className="policy-inform extra">
                    information
                </div>
                <div className="submi">
                    get quote
                </div>
            </div>
            </div>
        </div>
    )
}

export default Policies;
