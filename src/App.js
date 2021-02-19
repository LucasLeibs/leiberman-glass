import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import Inquire from './components/inquire';
function App() {
  return (
  
    <div className="container">
 
    <Nav></Nav>
    <Home></Home>
    <About></About>
    <Catalog></Catalog>
    <Inquire></Inquire>
    </div>
    
  );
}

export default App;
