import React from 'react'

import logo from '../images/glass/logo.png'
import blue from '../images/glass/IMG_7240.JPG'
import red from '../images/glass/IMG_7219.JPG'
import blue2 from '../images/glass/IMG_7248.JPG'
import lantern from '../images/glass/IMG_7171.JPG'
import pea from '../images/glass/IMG_7188.JPG'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
const slideImages = [
    lantern,
    blue,
    red,
    pea,
    blue2,
  ];
  
export default function Home() {
 
    return (
        <section id="home">
           
        <h1>LEIBERMAN GLASS</h1>
        
         <div className="slide-container">
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
        </Slide>
      </div>
      
       


      
        
       
     </section>
    )
}
