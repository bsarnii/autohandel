import React from 'react'
import './Home.css';
import Header from './Header';
import Willkommen from './Willkommen';
import Autokarten from './Autokarten';
import Mitarbeiter from './Mitarbeiter';
import Kontakt from './Kontakt';
import Footer from './Footer';


function Home() {
  return (
    <div>
     <Header 
      homeClass="home active" 
      galerieClass="galerie"
      kontaktClass="kontakt" 
      impressumClass="impressum" />
     <Willkommen />
     <Autokarten />
     <Mitarbeiter />
     <Kontakt />
     <Footer />
    </div>
  )
}

export default Home