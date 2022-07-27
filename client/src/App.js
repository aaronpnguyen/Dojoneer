import './App.css';
import Notepad from './components/Notepad';
import Tasks from './components/Tasks'


function App() {
  return (
    <div className="App container">
      <h1 className='logo'>DOJONEER</h1>
      <Tasks/>
       <Tasks/> 
      <Notepad/>
    </div>
  );
}

export default App;
