import React,{useState} from 'react'
import './Kontakt.css'
import Header from '../Home/Header'
import Footer from '../Home/Footer'

function Kontakt() {
  let [display, setDisplay] = useState("")
  let [erfolg, setErfolg] = useState("")

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
        <iframe src="https://maps.google.de/maps?hl=de&q=%20Stauffenbergstraße+25%20Weimar&t=&z=12&ie=utf8&iwloc=b&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='google-map' ></iframe>
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
            {erfolg}
            <from style={{display:display}}> 
              <label htmlFor='kontakt-name'>Name:</label>
              <br/>
              <input required id='kontakt-name' type="text" />
              <br/>
              <br/>
              <label htmlFor='kontakt-email'>E-Mail-Adresse:</label>
              <br/>
              <input required id='kontakt-email' type="text" />
              <br/>
              <br/>
              <label htmlFor='kontakt-telefon'>Telefon:</label>
              <br/>
              <input required id='kontakt-telefon' type="text" />
              <br/>
              <br/>
              <label htmlFor='kontakt-textarea'>Nachricht:</label>
              <br/> 
              <textarea id='kontakt-textarea' required/>
              <br/>
              <br/>
              <button type='submit' onClick={submitForm}>Senden</button>
            </from>
          </div>
        </div>
        <Footer />
    </div>
  )

  function submitForm(e){
    let kontaktName=document.getElementById("kontakt-name").value
    let kontaktEmail=document.getElementById("kontakt-email").value
    let kontaktTelefon=document.getElementById("kontakt-telefon").value
    let kontaktTextarea=document.getElementById("kontakt-textarea").value
    if (kontaktName!==""&&kontaktEmail!==""&&kontaktTelefon!==""&&kontaktTextarea!==""){
    setDisplay("none")
    setErfolg(<p>Ihre nachricht wurde gesendet.</p>)
    } else {
      setErfolg(<p>Bitte füllen Sie die Felder komplett aus!</p>)
    }
  }
}

export default Kontakt