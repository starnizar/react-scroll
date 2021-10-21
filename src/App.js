import './App.css';

function App() {
  return (
    <div className="App">
      <div id='red' className='red'>
          <a href='#blue'>To blue</a>
          <a href='#green'>To green</a>
      </div>
      <div id='blue' className='blue'>
          <a href='#red'>To red</a>
          <a href='#blue'>To blue</a>
      </div>
      <div id='green' className='green'>
        <a href='#red'>To red</a>
          <a href='#green'>To green</a>
      </div>
    </div>
  );
}

export default App;
