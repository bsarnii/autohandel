import React from 'react'
import './Impressum.css'
import Footer from '../Home/Footer'
import Header from '../Home/Header'

function Impressum() {
  return (
    <div>
     <Header 
      homeClass="home" 
      galerieClass="galerie"
      kontaktClass="kontakt" 
      impressumClass="impressum active" />
        <Footer />
    </div>
  )
}

export default Impressum