import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'

export default function Nav() {
  return (
     
    <Fragment>
        <Router>
      <nav className="navbar">
        <ul>
          <li className="link"><Link to="#home">Home</Link></li>
        
          <li className="link"><Link to="#about">About</Link></li>
   
          <li className="link"><Link to="#catalog">Catalog</Link></li>
   
          <li className="link"><Link to="#inquire">Inquire</Link></li>
      </ul>
      </nav>
      </Router>
    </Fragment>
  );
}
