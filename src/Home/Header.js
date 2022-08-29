import React, { useState } from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Header({galerieClass, homeClass, kontaktClass, impressumClass}) {
    const [toggle, setToggle] = useState(false);

    function toggleHamburger(){
        if (toggle===false){
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

  return (
        <header>
            <div className='header-left'>
                <Link to='/'><img src='autohaus-logo-neu-2.png' alt="firmen-logo" className='logo' /></Link>
            </div>
            <div className='header-right' id="primary-navigation" data-visible={toggle}>
                <Link className={homeClass}  to='/'>Home</Link>
                <Link className={galerieClass}  to='/galerie'>Galerie</Link>
                <Link className={kontaktClass} to='/kontakt'>Kontakt</Link>
                <Link className={impressumClass} to='/impressum'>Impressum</Link>
            </div>
            <MenuIcon onClick={toggleHamburger} fontSize='large' aria-controls='primary-navigation' aria-expanded='false'/>
        </header>
  )
}

export default Header