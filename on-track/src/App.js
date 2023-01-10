import './App.css';

import { Route } from 'react-router-dom'; 
import LoginPage from './page-components/LoginPage';
import RegisterPage from './page-components/RegisterPage';
import HomePage from './page-components/HomePage';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginPage}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <Route exact path='/home' component={HomePage}/>
    </div>
  );
}

export default App;
