import React from 'react'

import { Link } from "react-scroll";

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
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={750}
            >
            OCOTILLOW BOWLS
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
           PEAPODS
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
              LANTERNS
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
              ACORNS
            </Link>
          </li>
          </Anime>
        </ul>
       
      </nav>
    )
}


