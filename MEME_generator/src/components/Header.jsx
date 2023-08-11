import React from 'react'
import LOGO from "./Image/logo.svg";

const Header = () => {
  return (
    <div className="header" >
        
        <img src={LOGO} />
        <h3>Meme Generator</h3>
        <h4>React Course - Project 3</h4>
    </div>
  )
}

export default Header