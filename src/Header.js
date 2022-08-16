import React from 'react'
import './Header.css';

function Header() {
  return (
        <header>
            <div className='header-left'>
                <img src='autohaus-logo-neu-2.png' alt="firmen-logo" className='logo' />
            </div>
            <div className='header-right'>
                <a className='home active' href="http://localhost:3000/">Home</a>
                <a className='galerie' href="http://localhost:3000/">Galerie</a>
                <a className='kontakt' href="http://localhost:3000/">Kontakt</a>
                <a className='impressum' href="http://localhost:3000/">Impressum</a>
            </div>
        </header>
  )
}

export default Header