import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import BrowsePieces from './components/BrowsePieces';
import Main from './containers/Main';
// import blue from '../images/glass/IMG_7240.JPG'
function App() {
  return (
  <Router>
    <div className="container">
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route exact path="/work" component={BrowsePieces}/>
  
   
   
   
    </Switch>
    
    
    
    
    </div>
    </Router>
    
  );
}

export default App;
