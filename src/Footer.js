import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-col-1'>
        <img src='autohaus-logo-neu-2.png' alt="firmen-logo" className='logo-footer' />
        <p>Wir freuen uns, Ihnen bei Fragen
          <br/> weiter helfen zu können.</p>
      </div>
      <div className='footer-col-2'>
        <p>Kontakt</p>
        <p>Hier finden Sie uns:<br />
         Stauffenbergstraße 25, 99427<br/>
         Weimar, Deutschland</p>
        <p>Rufen Sie uns an:<br/>
           01628710079</p>
        <p>E-Mail<br/>scharnoui@gmail.com</p>  
      </div>
      <div className='footer-col-3'>
        <p>Folgen Sie uns</p>
        <div className='footer-icons'>
          <a href='https://www.facebook.com' target='_blank' rel='noreferrer'><FacebookIcon fontSize='large'/></a>
          <a href='https://www.twitter.com' target='_blank' rel='noreferrer'><TwitterIcon fontSize='large'/></a>
          <a href='https://www.instagram.com' target='_blank' rel='noreferrer'><InstagramIcon fontSize='large'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer