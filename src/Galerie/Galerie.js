import React, { useState, useEffect, useRef} from 'react'
import './Galerie.css'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Galerie = () => {
  let [bild, setBild] = useState({display:"none"});
  let [arrayNumber, setArrayNumber]= useState();
  let [backgroundBlur, setBackgroundBlur] = useState({});
  
  const bild1="url(/galerie/bild-1.jpg)";
  const bild2="url(/galerie/bild-2.jpg)";
  const bild3="url(/galerie/bild-3.jpg)";
  const bild4="url(/galerie/bild-4.jpg)";
  const bild5="url(/galerie/bild-5.jpg)";
  const bildArray=[bild1,bild2,bild3,bild4,bild5];
  function openBild(x){
    setArrayNumber(x)
    setBackgroundBlur({filter:"blur(2px)"});
    setBild({backgroundImage:bildArray[arrayNumber],display:"block"});
  }
  function closeBild(){
    setBild({display:"none"})
    setBackgroundBlur({})
  }
  function nextBild(){
    if (arrayNumber===4){
      setArrayNumber(0)
    } else {
      setArrayNumber(arrayNumber+1)
    }
  }

  function previousBild(){
    if (arrayNumber===0){
      setArrayNumber(4)
    } else {
      setArrayNumber(arrayNumber-1)
    }
  }
  

  const initialRender=useRef(true);
  useEffect(()=>{
    if(initialRender.current){
      initialRender.current=false;
    } else{
  const bild1="url(/galerie/bild-1.jpg)";
  const bild2="url(/galerie/bild-2.jpg)";
  const bild3="url(/galerie/bild-3.jpg)";
  const bild4="url(/galerie/bild-4.jpg)";
  const bild5="url(/galerie/bild-5.jpg)";
  const bildArray=[bild1,bild2,bild3,bild4,bild5];
  setBackgroundBlur({filter:"blur(2px)"});
  setBild({backgroundImage:bildArray[arrayNumber],display:"block"});
  }},[arrayNumber])

  return (
    <>
      <div className='galerie' style={backgroundBlur}>
          <Header 
          homeClass="home" 
          galerieClass="galerie active"
          kontaktClass="kontakt" 
          impressumClass="impressum"
          />
          <h1>Bildergalerie</h1>
          <div className='galerie-main'>
            <p>Hier stellen wir Ihnen unser Autohaus in Bildern vor.</p>
            <div className='galerie-container'>
              <div onClick={()=>{openBild(0)}}  className="bild-1"> </div>
              <div onClick={()=>{openBild(1)}} className="bild-2"> </div>
              <div onClick={()=>{openBild(2)}} className="bild-3"> </div>
              <div onClick={()=>{openBild(3)}} className="bild-4"> </div>
              <div onClick={()=>{openBild(4)}} className="bild-5"> </div>
            </div>
          </div>
          <Footer
          />
    </div>
    <div className='big-img-container' style={bild}>
          <CloseIcon fontSize='large' onClick={closeBild}/>
          <NavigateBeforeIcon fontSize='large' onClick={previousBild} />
          <NavigateNextIcon fontSize='large' onClick={nextBild} />
    </div>
    </>
  )
  
}

export default Galerie