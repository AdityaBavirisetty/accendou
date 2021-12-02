import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import logo2 from './logo2.png'
import Future from './components/Future'
import Insurer from './components/Insurer';
import Current from './components/current';
import Landing from './components/Landing';
import Landing2 from './components/Landing2';
import Login from './components/Login';
import Policies from './components/Policies';
import Pricing from './components/Pricing';
import Claims from './components/Claims';
import details from './components/details';
import Persona from './components/Persona';
import UserDetails from './components/UserDetails';
import ExcelToJson from './components/ExcelToJson';
import LoginClaim from './components/LoginClaim';
import Language from './components/Language';
import index1 from './components/index1';

function App() {
  return (
    <div>
      <BrowserRouter>
      <header>
        <div className="logo">
              <img src={logo2} alt="logo"/>
              <Link to="/persona"><a>Home</a></Link>
        </div>
        
        <h1>IDEA-Intelligent App Store for Insurers </h1>
        <h4>'Making <b >AI Real</b> For The Digital Insurer'</h4>
    </header>
    <Switch>
       
       <Route path='/current' Exact component={Current}></Route>
       <Route path='/landing2' Exact component={Landing2}></Route>
       <Route path='/future' Exact component={Future}></Route>
       <Route path='/insurer' Exact component={Insurer}></Route>
       <Route path='/login' Exact component={Login}></Route>
       <Route path='/policies' Exact component={Policies}></Route>
       <Route path='/pricing' Exact component={Pricing}></Route>
       <Route path='/claims' Exact component={Claims}></Route>
       <Route path='/details' Exact component={details}></Route>
       <Route path='/persona' Exact component={Persona}></Route>
       <Route path='/userdetails' Exact component={UserDetails}></Route>
       <Route path='/excel' Exact component={ExcelToJson}></Route>
       <Route path='/loginclaim' Exact component={LoginClaim}></Route>
       <Route path='/language' Exact component={Language}></Route>
       <Route path='/index' Exact component={index1}></Route>
       <Route path='/' Exact component={Persona}></Route>
    </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
