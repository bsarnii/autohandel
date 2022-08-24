import React from 'react'
import './Galerie.css'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

const Galerie = () => {
  return (
    <div className='galerie'>
        <Header 
        homeClass="home" 
        galerieClass="galerie active"
        kontaktClass="kontakt" 
        impressumClass="impressum" />
        <h1>Bildergalerie</h1>
        <div className='galerie-main'>
          <p>Hier stellen wir Ihnen unser Autohaus in Bildern vor.</p>
          <div className='galerie-container'>
            <div className="bild-1"> </div>
            <div className="bild-2"> </div>
            <div className="bild-3"> </div>
            <div className="bild-4"> </div>
            <div className="bild-5"> </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Galerie