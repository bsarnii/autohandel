import './App.css';
import Header from './Header';
import Willkommen from './Willkommen';
import Autokarten from './Autokarten';
import Mitarbeiter from './Mitarbeiter';
import Kontakt from './Kontakt';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Willkommen />
     <Autokarten />
     <Mitarbeiter />
     <Kontakt />
     <Footer />
    </div>
  );
}

export default App;
