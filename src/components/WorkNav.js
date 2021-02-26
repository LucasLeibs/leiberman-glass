import React from 'react'

import { Link } from "react-router-dom";

import Anime from 'react-anime';
export default function WorkNav() {
    return (
        <nav className="navbar">
        <ul>
        <Anime
          loop={false}
          duration={3000}
          direction="alternate"
          delay={(el, index) => index * 240}
          translateX='5rem'
          scale={[.95, .9]}
          >
              
          <li>
            <Link
              className="link"
                to="/work"
            >
            OCOTILLOW BOWLS
            </Link>
          </li>
          <li>
            {" "}
            <Link
          
              to="/peapods"
         
            >
           PEAPODS
            </Link>
          </li>
          <li>
            <Link
           
              to="/lanterns"
        
            >
              LANTERNS
            </Link>
          </li>
          <li>
            <Link
              className="link"
             
            >
              ACORNS
            </Link>
          </li>
          <li>
            <Link
              className="link"
             to="/"
            >
              ACORNS
            </Link>
          </li>
          </Anime>
        </ul>
       
      </nav>
    )
}


