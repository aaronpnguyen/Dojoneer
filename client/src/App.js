import './App.css';
import Notepad from './components/Notepad';
import Tasks from './components/Tasks'
import Audio from './components/Audio';


function App() {
  return (
    <div className="App container">
      <h1 className='logo'>Dojoneer</h1>
      <Tasks/>
      <Notepad/>
      <Audio/>
    </div>
  );
}

export default App;
