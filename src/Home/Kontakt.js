import React, { useState } from 'react'
import './Kontakt.css'

function Kontakt() {
    let [displayForm,setDisplayForm] = useState("");
    let [inputErfolg, setInputErfolg] = useState("");
  return (
    <div className='kontakt-section'>
        <div className='kontakt-row-1'>
            <h2>Kontakt</h2>
            <p>Schreiben Sie und erfahren Sie mehr.</p>
        </div>
        <div className='kontakt-row-2'>
            <div className='google-maps'>
            <iframe title='map' width="300" height="274" id="gmap_canvas" src="https://maps.google.de/maps?hl=de&q=%20Stauffenbergstraße+25%20Weimar&t=&z=12&ie=utf8&iwloc=b&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
            <div className='inputs'>
                <h2>Ihre Nachricht an uns:</h2>
                {inputErfolg}
                <form style={{display:displayForm}}>
                    <div className='form-row-1'>
                        <div className='input-name'>
                            <label htmlFor='name'>Name:</label>
                            <br />
                            <input required name='name' id='name' type='text' />
                        </div>
                        <div className='input-email'>
                            <label htmlFor='email'>E-Mail-Adresse:</label>
                            <br />
                            <input required name='email' id='email' type='email' />
                        </div>
                        <div className='input-telefon'>
                            <label htmlFor='telefon'>Telefon:</label>
                            <br />
                            <input required name='telefon' id='telefon' type='text' />
                        </div>
                    </div>
                    <div className='form-row-2'>
                        <label htmlFor='message'>Nachricht:</label>
                        <br />
                        <textarea required className='message' id='message' name='message'/>
                    </div>
                    <div className='form-row-3'>
                        <button onClick={submitInputForm}>Senden</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
  function submitInputForm(){
    let inputName=document.getElementById("name").value
    let inputEmail=document.getElementById("email").value
    let inputTelefon=document.getElementById("telefon").value
    let inputTextarea=document.getElementById("message").value
    if (inputName!==""&&inputEmail!==""&&inputTelefon!==""&&inputTextarea!==""){
    setDisplayForm("none")
    setInputErfolg(<p>Ihre nachricht wurde gesendet.</p>)
    } else {
      setInputErfolg(<p>Bitte füllen Sie die Felder komplett aus!</p>)
    }
  }    

}

export default Kontakt