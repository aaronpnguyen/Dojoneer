import {Routes, Route} from 'react-router-dom'
import './App.css';
import Notepad from './components/Notepad';


function App() {
  return (
    <div className="App container">
      <h1 className='logo'>Dojoneer</h1>

      <Notepad />

    </div>
  );
}

export default App;
