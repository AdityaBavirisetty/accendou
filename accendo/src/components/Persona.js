import React from 'react'
import { useState } from 'react';
import "../styles/Persona.css";

const Persona = () => {
    const [value,SetValue] = useState(0);


    return (
        <div>
            <div className="sticky-filters">
                 <div className="sticky-filter" onClick={()=> {SetValue(0);console.log(value)}}>
                     store front
                 </div>
                 <div className="sticky-filter" onClick={()=> {SetValue(1)}}>
                     Insurence 
                     Functions
                 </div>
                 <div className="sticky-filter" onClick={()=> SetValue(2)}>
                     LOB
                 </div>
            </div>
            {value == 0?(
            <div>
                        <div className="per-heading">
                            <h4>AI for growth</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">AI for Growth</div>
                            <div className="card">AI for CX</div>
                            <div className="card">AI for Intelligent Operations</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
                        <div className="per-heading">
                            <h4>AI for CX</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Underwriting</div>
                            <div className="card">Claims</div>
                            <div className="card">Sales & Marketing</div>
                            <div className="card">Pricing</div>
                        </div>
                        </div>
                        <div className="per-heading">
                            <h4>AI for Intelligent Operations</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Health</div>
                            <div className="card">P & C</div>
                            <div className="card">Auto</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
                        <div className="per-heading">
                            <h4>AI for Risk & Resilience</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Health</div>
                            <div className="card">P & C</div>
                            <div className="card">Auto</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
            </div>):null}
            {value == 1?(
            <div>
                        <div className="per-heading">
                            <h4>Underwriting</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">AI for Growth</div>
                            <div className="card">AI for CX</div>
                            <div className="card">AI for Intelligent Operations</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
                        <div className="per-heading">
                            <h4>Claims</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Underwriting</div>
                            <div className="card">Claims</div>
                            <div className="card">Sales & Marketing</div>
                            <div className="card">Pricing</div>
                        </div>
                        </div>
                        <div className="per-heading">
                            <h4>Sales & Marketing</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Health</div>
                            <div className="card">P & C</div>
                            <div className="card">Auto</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
                        <div className="per-heading">
                            <h4>Pricing</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Health</div>
                            <div className="card">P & C</div>
                            <div className="card">Auto</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
            </div>):null}
            {value == 2?(
            <div>
                        <div className="per-heading">
                            <h4>Health</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">AI for Growth</div>
                            <div className="card">AI for CX</div>
                            <div className="card">AI for Intelligent Operations</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
                        <div className="per-heading">
                            <h4>P & C</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Underwriting</div>
                            <div className="card">Claims</div>
                            <div className="card">Sales & Marketing</div>
                            <div className="card">Pricing</div>
                        </div>
                        </div>
                        {/* <div className="per-heading">
                            <h4>AI for Intelligent Operations</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Health</div>
                            <div className="card">P & C</div>
                            <div className="card">Auto</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div> */}
                        <div className="per-heading">
                            <h4>Auto</h4>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'center',height:'35vh'}}>
                        <div className="per-container">
                            <div className="card">Health</div>
                            <div className="card">P & C</div>
                            <div className="card">Auto</div>
                            <div className="card">AI for Risk & Resilience</div>
                        </div>
                        </div>
            </div>):null}
        </div>
    )
}

export default Persona
