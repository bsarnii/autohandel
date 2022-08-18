import React from 'react'
import './Autokarten.css'
import Karte from './Karte'

function Autokarten() {
  return (
    <div className='autokarten'>
        <h2>Unsere Fahrzeuge</h2>
        <div className='karten'>
            <Karte 
            name='Opel Astra'
            img='opel-astra.jpg'
            jahr='2016'
            leistung='110 kW (150 PS)'
            kraftstoff='Benzin'
            km='65.000 km'
            preis='12 000 €'
            />
            <Karte 
            name='BMW 745e 7 series G12'
            img='bmw-745e.jpg'
            jahr='2020'
            leistung='290 kW (394 PS)'
            kraftstoff='Hybrid (Benzin/Elektro)'
            km='3.815 km'
            preis='85 000 €'
             />
            <Karte
            name='Volkswagen Golf VII'
            img='volkswagen-golf.jpg'
            jahr='2019'
            leistung='221 kW (300 PS)'
            kraftstoff='Benzin'
            km='57.990 km'
            preis='34 890 €'
            />
            <Karte
            name='Audi A3'
            img='audi-a3.jpg'
            jahr='2018'
            leistung='110 kW (150 PS)'
            kraftstoff='Benzin'
            km='72.300 km'
            preis='24 700 €'
            />
            <Karte
            name='Volkswagen T-Roc R-Line'
            img='vw-troc.jpg'
            jahr='2020'
            leistung='110 kW (150 PS)'
            kraftstoff='Benzin'
            km='6.944 km'
            preis='42 000 €'
            />
        </div>
    </div>
  )
}

export default Autokarten