import React from 'react'
import './Autokarten.css'
import Karte from './Karte'

function Autokarten() {
  return (
    <div className='autokarten'>
        <h2>Unsere Fahrzeuge</h2>
        <div className='karten'>
            <Karte />
        </div>
    </div>
  )
}

export default Autokarten