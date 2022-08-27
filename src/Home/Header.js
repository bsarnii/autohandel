import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header({galerieClass, homeClass, kontaktClass, impressumClass}) {
    let [trigger, setTrigger]=useState(false);
    function triggerHamburger(){
        if (trigger===false){
            setTrigger(true)
        } else {
            setTrigger(false)
        }
        console.log(trigger)
    }
  return (
        <header>
            <div className='header-left'>
                <img src='autohaus-logo-neu-2.png' alt="firmen-logo" className='logo' />
            </div>
            <div className='header-right'>
                <Link className={homeClass}  to='/'>Home</Link>
                <Link className={galerieClass}  to='/galerie'>Galerie</Link>
                <Link className={kontaktClass} to='/kontakt'>Kontakt</Link>
                <Link className={impressumClass} to='/impressum'>Impressum</Link>
            </div>
            <MenuIcon fontSize='large' onClick={triggerHamburger}/>
        </header>
  )
}

export default Header