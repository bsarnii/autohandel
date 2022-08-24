import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Galerie from './Galerie/Galerie';
import Kontakt from './Kontakt/Kontakt';
import Impressum from './Impressum/Impressum';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='galerie' element={<Galerie />} />
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='impressum' element={<Impressum />} />
      </Routes>
    </div>
  );
}

export default App;
