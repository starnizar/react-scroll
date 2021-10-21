import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SeconfPage';

function App() {
  return (
    <BrowserRouter>

      <div className='navigation'>
        <Link className='nav-item' to='/'>Frist page</Link>
        <Link className='nav-item' to='/second'>Second page</Link>
        <Link className='nav-item' to='/second/#pink'>Second page-pink</Link>
      </div>

      <Switch>
        <Route exact path='/'>
          <FirstPage />
        </Route>
        <Route path='/second'>
          <SecondPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
