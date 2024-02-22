import logo from './logo.svg';
import './App.css';
import Frase from './components/Frase';
import Logo from './components/Logo';
import Ola  from './components/Ola';

function App() {
  const nome = "Logo React";
  const ft = 'https://www.iteachrecruiters.com/img/blog/logo/react-native.png';
  return (
    <div className="App">
      <header >
        <Frase/>
        <Logo/>
        
      </header>
      <body>

      <Ola 
      foto = {ft}
      title={nome} />
       
      
      </body>
    </div>
  );
}

export default App;
