import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
// import blue from '../images/glass/IMG_7240.JPG'
function App() {
  return (
  
    <div className="container">
 
    <Nav></Nav>
    <Home></Home>
    <About></About>
    <Catalog></Catalog>
    <Contact></Contact>
    
    
    </div>
    
  );
}

export default App;
