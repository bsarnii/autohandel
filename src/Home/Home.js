import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './Home.css';
import Header from './Header';
import Willkommen from './Willkommen';
import Autokarten from './Autokarten';
import Mitarbeiter from './Mitarbeiter';
import Kontakt from './Kontakt';
import Footer from './Footer';
import CloseIcon from '@mui/icons-material/Close'
import { closeImage } from '../counter';


function Home() {
  const { value } = useSelector( state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
     <Header 
      homeClass="home active" 
      galerieClass="galerie"
      kontaktClass="kontakt" 
      impressumClass="impressum" />
     <Willkommen />
     <Autokarten />
     <Mitarbeiter />
     <Kontakt />
     <Footer />
     <div className='home-img-container' style={value}>
     <CloseIcon fontSize='large' onClick={()=>{dispatch(closeImage())}}/>
     </div>
    </div>
  )
}

export default Home