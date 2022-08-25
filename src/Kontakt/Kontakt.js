import React from 'react'
import './Kontakt.css'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

function Kontakt() {
  return (
    <div className='kontakt-site'>
        <Header 
        homeClass="home" 
        galerieClass="galerie"
        kontaktClass="kontakt active" 
        impressumClass="impressum" />
        <h1>Ihr Kontakt zu uns</h1>
        <p>Haben Sie Fragen zu unseren Fahrzeugen oder unseren Dienstleistungen?
           Füllen Sie einfach das Kontaktformular aus, und wir setzen uns schnellstmöglich
           mit Ihnen in Verbindung.</p>
        <div className='google-map'>
        <div style={{height:"500px",width:"1000px"}}><iframe width="1000" height="500" src="https://maps.google.de/maps?hl=de&q=%20Stauffenbergstraße+25%20Weimar&t=&z=12&ie=utf8&iwloc=b&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='google-map' style={{height:"500px",width:"1000px"}}></iframe></div>
        </div>
        <div className='adresse-input'>
          <div className='adresse-input-left'>
            <h3>Hier finden Sie uns:</h3>
            <p>Stauffenbergstraße 25, 99427 Weimar, Deutschland</p>
            <h3>Öffnungszeiten:</h3>
            <p>Mo-Fr<span style={{marginLeft:"60px"}}>9:00 - 17:00</span></p>
            <p>Sa-So<span style={{marginLeft:"60px"}}>Geschlossen</span></p>
          </div>
          <div className='adresse-input-right'>
            <h3>Ihre Nachricht an uns:</h3>
            <from>
              <label>Name:</label>
              <br/>
              <input type="text" />
              <br/>
              <br/>
              <label>E-Mail-Adresse:</label>
              <br/>
              <input type="text" />
              <br/>
              <br/>
              <label>Telefon:</label>
              <br/>
              <input type="text" />
              <br/>
              <br/>
              <label>Nachricht:</label>
              <br/>
              <textarea/>
              <br/>
              <br/>
              <button onClick={(e)=> e.preventDefault()}>Senden</button>
            </from>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Kontakt