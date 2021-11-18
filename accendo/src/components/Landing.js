import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <div className="container">
        <div className="box" >
              <Link to="/landing2" style={{textDecoration: "none"}}>
                <p>Current state</p></Link>
        </div>
        <div className="box">
        <Link to="/future" style={{textDecoration: "none"}}><p>Future state</p></Link>
        </div>
    </div>
        </div>
    )
}

export default Landing
