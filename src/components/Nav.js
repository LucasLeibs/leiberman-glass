import React from "react";
import { Link } from "react-scroll";
import {Link as Linky} from 'react-router-dom'
import Anime from 'react-anime';
export default function Nav() {
  
  return (
    
      <nav className="navbar">
        
          
        <ul>
        <Anime
          loop={1}
          duration={5000}
          direction="alternate"
          delay={(el, index) => index * 240}
          translateX='13rem'
          scale={[.95, .9]}
          >
              
          <li>
            <Link
              className="link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              LEIBERMAN GLASS
            </Link>
          </li>
          <li>
            {" "}
            <Link
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
          <li>
            <Link
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
          <li>
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
              CONTACT
            </Link>
          </li>
          </Anime>
        </ul>
       
      </nav>
    
  );
}
