import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
  return (
        <header>
            <div className='header-left'>
                <img src='autohaus-logo-neu-2.png' alt="firmen-logo" className='logo' />
            </div>
            <div className='header-right'>
                <Link className='home active' to='/'>Home</Link>
                <Link className='galerie' to='/galerie'>Galerie</Link>
                <a className='kontakt' href="http://localhost:3000/">Kontakt</a>
                <a className='impressum' href="http://localhost:3000/">Impressum</a>
            </div>
        </header>
  )
}

export default Header