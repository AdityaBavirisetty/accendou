import React from 'react';
import { Link} from 'react-router-dom';

const Landing2 = () => {
    return (
        <div>
            <div className="container">
                      <div className="box" >
                                <Link to="/current" style={{textDecoration: "none"}}><p>Customer</p></Link>
                      </div>
                      <div className="box">
                                {/* <Link to="/insurer" style={{textDecoration: "none"}}><p>Insurer</p></Link> */}
                                <a href="http://15.207.104.100/home.html" target="_blank" style={{textDecoration:'none'}}><p>Insurer</p></a>
                      </div>
              </div>
        </div>
    )
}

export default Landing2
