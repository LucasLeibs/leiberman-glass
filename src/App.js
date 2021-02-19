import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
    <Nav></Nav>
    <section id="home">
    <h1>Leiberman Glass</h1>
    <p>Intro</p>
    </section>
    <section id="about">
    <h1>About</h1>
    <p>Mission Statement</p>
    </section>
    <section id="catalog">
    <h1>Browse Peices</h1>
    <p>Here they are</p>
    </section>
    <section id="inquire">
    <h1>Inquire about a peice</h1>
    <p>Contact Info</p>
    </section>
    
    </div>
  );
}

export default App;
