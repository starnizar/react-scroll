import './App.css';

function App() {
  return (
    <div className="App">
      <div id='red' className='red'>
          <a href='#blue'>To blue</a>
          <a href='#green'>To blue</a>
      </div>
      <div id='blue' className='blue'>
          <a href='#red'>To blue</a>
          <a href='#green'>To blue</a>
      </div>
      <div id='green' className='green'>
        <a href='#red'>To blue</a>
          <a href='#green'>To blue</a>
      </div>
    </div>
  );
}

export default App;
