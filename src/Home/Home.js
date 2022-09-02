import React from 'react'
import './Home.css';
import Header from './Header';
import Willkommen from './Willkommen';
import Autokarten from './Autokarten';
import Mitarbeiter from './Mitarbeiter';
import Kontakt from './Kontakt';
import Footer from './Footer';
import CloseIcon from '@mui/icons-material/Close'


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
     <div className='home-img-container' style={{backgroundImage:"url('./opel-astra.jpg')"}}>
     <CloseIcon fontSize='large'/>
     </div>
    </div>
  )
}

export default Home