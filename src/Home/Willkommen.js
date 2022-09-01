import React from 'react'
import { Link } from 'react-router-dom'
import './Willkommen.css'

function Willkommen() {
  return (
    <div className='willkommen'>
        <h1>Herzlich Willkommen <br />in unserem<br /> Autohaus</h1>
        <Link to='/galerie' role='button' className='btn'>MEHR ERFAHREN</Link>
    </div>
  )
}

export default Willkommen