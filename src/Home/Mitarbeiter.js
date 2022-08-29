import React from 'react'
import './Mitarbeiter.css'

function Mitarbeiter() {
  return (
    <div className='mitarbeiter'>
        <div className='mitarbeiter-container'>
            <div className='top-mitarbeiter'>
                <h2>Unsere Mitarbeiter</h2>
                <p>Unsere qualifizierten Fachkräfte freuen sich, Sie zu beraten.</p>
            </div>
            <div className='bottom-mitarbeiter'>
                <p className='bottom-left-mitarbeiter'>
                Wir bieten Ihnen eine große Auswahl von Neu- und Jahreswagen aller Marken
                – Top-Qualität zu unschlagbaren Preisen. Mit über drei Jahrzehnten Erfahrung
                in der Automobilbranche können wir Ihnen versprechen, dass wir für jede 
                Anfrage den richtigen Wagen finden. 
                </p>
                <p className='bottom-right-mitarbeiter'>
                Kommen Sie vorbei und sehen Sie sich unsere Ausstellungsräume an. 
                Mit Sicherheit haben wir auch für Sie das richtige Auto parat.
                </p>
            </div>
        </div>
        <div className='geschäftszeiten'>
            <div className='col-1'>
                <h2>Geschäftszeiten</h2>
                <p>Sie erreichen uns unter der Woche täglich von 8 bis 17 Uhr.</p>
            </div>
            <div className='col-2'>
                <div className='days'>
                    <p>Mo-Fr</p>
                    <p>Sa-So</p>
                </div>
                <div className='hours'>
                    <p>9:00 - 17:00</p>
                    <p>Geschlossen</p>
                </div>
            </div>
            <div className='col-3'>
                <h2>01628710079</h2>
            </div>
            
        </div>
    </div>
  )
}

export default Mitarbeiter