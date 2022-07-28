import './App.css';
import Notepad from './components/Notepad';
import Tasks from './components/Tasks'
import Audio from './components/Audio';
import Timer from './components/Timer';
import Draggable from 'react-draggable'


function App() {
  return (
    <div className="App container">
      <h1 className='logo'>DOJONEER</h1>
      <Draggable>
        <div>
          <Tasks/>
        </div>
      </Draggable>

      <Draggable>
        <div>
          <Timer/>
        </div>
      </Draggable>

      <Draggable>
        <div>
          <Notepad/>
        </div>
      </Draggable>

      <Draggable>
        <div>
          <Audio/>
        </div>
      </Draggable>

    </div>
  );
}

export default App;
