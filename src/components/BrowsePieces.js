import React from 'react'
import blue from '../images/glass/IMG_7240.JPG'
import red from '../images/glass/IMG_7219.JPG'
import blue1 from '../images/glass/IMG_7217.JPG'
import blue2 from '../images/glass/IMG_7206.JPG'
import red2 from '../images/glass/IMG_7230.JPG'

export default function BrowsePieces() {
    return (
        <div className="section">
             <div className="image-container">

<img  onMouseOver={e => (e.currentTarget.src = red2)} className="catalog-image" src={red}
    onMouseOut={e => (e.currentTarget.src = red)}
></img>
<p>RED URCHIN</p>

</div>
             <div className="image-container">

<img  onMouseOver={e => (e.currentTarget.src = blue2)}className="catalog-image" src={blue1}
    onMouseOut={e => (e.currentTarget.src = blue1)}
></img>
<p>BLUE</p>

</div>
        </div>
    )
}
