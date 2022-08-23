import React from 'react'
import './Karte.css'


function Karte({name, img, jahr, kraftstoff, leistung, km, preis}) {

  return (
    <>
      <div className='karte'>
          <img 
          className='karte-img' 
          src={img}
          alt={name} />
          <div className='karte-name'>{name}</div>
          <div className='karte-daten'>
              <ul>
                  <li>Baujahr: {jahr}</li>
                  <li>Leistung: {leistung}</li>
                  <li>Kraftstoff: {kraftstoff}</li>
                  <li>Kilometerstand: {km}</li>
              </ul>
          </div>
          <div className='preis'>{preis}</div>
      </div>
    </>
  )
}

export default Karte