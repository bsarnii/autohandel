import React from 'react'
import './Karte.css'

function Karte() {
  return (
    <div className='karte'>
        <img 
        className='karte-img' 
        src='opel-astra.jpg' 
        alt='opel astra' />
        <div className='karte-name'>Opel Astra</div>
        <div className='karte-daten'>
            <ul>
                <li>Baujahr:2016</li>
                <li>Leistung: 110kW(150 PS)</li>
                <li>Kraftstoff: Benzin</li>
                <li>km: 65.000</li>
            </ul>
        </div>
    </div>
  )
}

export default Karte