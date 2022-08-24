import React from 'react'
import './Kontakt.css'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

function Kontakt() {
  return (
    <div>
        <Header 
        homeClass="home" 
        galerieClass="galerie"
        kontaktClass="kontakt active" 
        impressumClass="impressum" />
        <Footer />
    </div>
  )
}

export default Kontakt