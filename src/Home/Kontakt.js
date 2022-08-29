import React from 'react'
import './Kontakt.css'

function Kontakt() {
  return (
    <div className='kontakt-section'>
        <div className='kontakt-row-1'>
            <h2>Kontakt</h2>
            <p>Schreiben Sie und erfahren Sie mehr.</p>
        </div>
        <div className='kontakt-row-2'>
            <div className='google-maps'>
            <iframe title='map' width="300" height="274" id="gmap_canvas" src="https://maps.google.com/maps?q=Stauffenbergstra%C3%9Fe%2025&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
            <div className='inputs'>
                <h2>Ihre Nachricht an uns:</h2>
                <form>
                    <div className='form-row-1'>
                        <div className='input-name'>
                            <label htmlFor='name'>Name:</label>
                            <br />
                            <input required name='name' id='name' type='text' />
                        </div>
                        <div className='input-email'>
                            <label htmlFor='email'>E-Mail-Adresse:</label>
                            <br />
                            <input name='email' id='email' type='email' />
                        </div>
                        <div className='input-telefon'>
                            <label htmlFor='telefon'>Telefon:</label>
                            <br />
                            <input name='telefon' id='telefon' type='text' />
                        </div>
                    </div>
                    <div className='form-row-2'>
                        <label htmlFor='message'>Nachricht:</label>
                        <br />
                        <textarea className='message' id='message' name='message'/>
                    </div>
                    <div className='form-row-3'>
                        <button onClick={(e)=> e.preventDefault()}>Senden</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Kontakt