import './App.css';
import Notepad from './components/Notepad';
import Tasks from './components/Tasks'
import Audio from './components/Audio';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App container">
      <h1 className='logo'>DOJONEER</h1>
      <Tasks/>
      <Notepad/>
      <Audio/>
      <Timer/>
    </div>
  );
}

export default App;
