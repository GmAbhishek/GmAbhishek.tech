import React from 'react'
import avatar from '../assets/Avatar.jpg'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Header(): JSX.Element {


 
  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <img src={avatar} alt="avatar" className="Header__avatar" />

        <div className="Header__inner2">
          <h1><b>Gm_Abhishek</b></h1>
          
        </div>
      </div>
    </div>
  )
}

export default Header
