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
      <main className='impressum-main'>
        <h1>Impressum</h1>
        <div className='impressum-container'>
          <h3>Verantwortlich:</h3>
          <p>Arnold Schiopu</p>
          <h3>Kontakt</h3>
          <p>Adresse: Stauffenbergstraße 25, Weimar</p>
          <p>Telefon: 01628710079</p>
          <p>E-mail: scharnoui@gmail.com</p>
          <h3>Registriereintrag:</h3>
          <p>R000032701</p>
          <h3>Umsatzsteuer-ID</h3>
          <p>DE3983455629</p>
          <h3>Wirtschafts-Identifikationsnummer:</h3>
          <p>99 999 999 999</p>
          <h3>Aufsichtsbehörde:</h3>
          <p>Industrie- und Handelskammer Lorem Ipsum</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Impressum