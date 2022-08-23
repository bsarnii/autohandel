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
     <Header />
     <Willkommen />
     <Autokarten />
     <Mitarbeiter />
     <Kontakt />
     <Footer />
    </div>
  )
}

export default Home