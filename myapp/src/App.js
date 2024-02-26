
import './App.css';
import Home from './components/pages/Home';
import Pag1 from './components/pages/Pag1';
import Pag2 from './components/pages/Pag2';

//import Frase from './components/Frase';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import {BrowserRouter as Router ,Route,Routes, Link } from "react-router-dom" 
  

function App() {
  
  return (
    <div className="App">
     <Router>
      <Header/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Pag1" element={<Pag1/>}/>
        <Route exact path="/Pag2" element={<Pag2/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
