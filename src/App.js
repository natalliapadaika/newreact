// import logo from './logo.svg';
import marron from './marron.png';
import './App.css';
import {Head} from './components/head/head';
import { Navigation} from './components/head/nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head newLogo = {marron}
        link='https://marron.com' text = 'MARRON'/>
        <Navigation  
            
        />

      </header>
    </div>
  );
}

export default App;
