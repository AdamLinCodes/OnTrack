import './App.css';
import MainPage from './page-components/MainPage';
import { Route } from 'react-router-dom'; 
import LoginPage from './page-components/LoginPage';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/login' component={LoginPage}/>
    </div>
  );
}

export default App;
