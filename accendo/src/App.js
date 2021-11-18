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

function App() {
  return (
    <div>
      <BrowserRouter>
      <header>
        <div className="logo">
              <img src={logo2} alt="logo"/>
              <Link to="/landing"><a>Home</a></Link>
        </div>
        
        <h1>Accendo '21</h1>
        <h5>'Making <b>AI Real</b> For The Digital Insurer'</h5>
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
       <Route path='/' Exact component={Landing}></Route>
    </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
