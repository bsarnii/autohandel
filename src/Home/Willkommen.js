import React from 'react'
import './Willkommen.css'

function Willkommen() {
  return (
    <div className='willkommen'>
        <h1>Herzlich Willkommen <br />in unserem<br /> Autohaus</h1>
        <button className='btn' onClick={(e)=> e.preventDefault()}>MEHR ERFAHREN</button>
    </div>
  )
}

export default Willkommen