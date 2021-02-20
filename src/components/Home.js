import React from 'react'
import lantern from '../images/glass/lantern2jpg.jpg'
import logo from '../images/glass/logo.png'
export default function Home() {
    return (
        <section id="home">
           <div>
            <img className="lantern" src={lantern}></img>
            </div>
            <div>
        <img className="logo" src={logo}></img>
        <h1>Leiberman Glass</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
</p>
        </div>
        </section>
    )
}
