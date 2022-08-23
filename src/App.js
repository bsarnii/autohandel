import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Galerie from './Galerie/Galerie';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='galerie' element={<Galerie />}/>
      </Routes>
    </div>
  );
}

export default App;
