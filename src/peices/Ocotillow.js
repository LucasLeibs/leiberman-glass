import React from 'react'

import red2 from "../images/glass/IMG_7230.JPG";
import logo from '../images/glass/logo.png'
import blue from '../images/glass/IMG_7240.JPG'
import red from '../images/glass/IMG_7219.JPG'
import blue2 from '../images/glass/IMG_7248.JPG'
import blue3 from '../images/glass/IMG_7202.JPG'
import blueClose from '../images/glass/IMG_7206.JPG'
import bluebowl from '../images/glass/IMG_7249.JPG'
import redlean from '../images/glass/IMG_7236.JPG'

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Anime from 'react-anime';
const slideImages = [
    
    blue,
    red,
    blue2,
    blueClose,
    blue3,
    bluebowl,
    redlean
  ];
  
export default function Ocotillow() {
    return (
        
    <section>
         <div className="slide-container">
         <Anime duration={2000} opacity={[0, 1]} translateY={'2em'} delay={(e, i) => i * 1000}>
        <Slide>
          <div className="each-slide">
            <div >
             <img src={slideImages[0]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[1]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[2]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[3]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[4]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[5]}></img>
            </div>
          </div>
          <div className="each-slide">
          <div>
             <img src={slideImages[6]}></img>
            </div>
          </div>
        </Slide>
        </Anime>
        
      </div>
       </section>
    )
}
