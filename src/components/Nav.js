import React, { Fragment } from "react";
// import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'
import { Link } from 'react-scroll'
export default function Nav() {
  return (
     
    <Fragment>
        
      <nav className="navbar">
        <ul>
           <li> <Link 
            className="link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
            >
            HOME
            </Link>
            </li>
           <li> <Link 
                className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
            >
            ABOUT
            </Link>
            </li>
            <li><Link 
                className="link"
            activeClass="active"
            to="catalog"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
            >
            CATALOG
            </Link>
            </li>
            <li><Link 
                className="link"
            activeClass="active"
            to="inquire"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
            >
            CONTACT
            </Link>
            </li>
      </ul>
      </nav>
      
    </Fragment>
  );
}
