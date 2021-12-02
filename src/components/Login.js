import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <div>
            <div className="container">
                      <div className="box" >
                                <Link to="/current" style={{textDecoration: "none"}}><p>Personalised Policies & Quote</p></Link>
                      </div>
                      <div className="box">
                                <Link to="/loginclaim" style={{textDecoration: "none"}}><p>Touchless Claims</p></Link>
                      </div>
              </div>
        </div>
        </div>
    )
}

export default Login
