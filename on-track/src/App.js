import './App.css';

import { Route } from 'react-router-dom'; 
import LoginPage from './page-components/LoginPage';
import RegisterPage from './page-components/RegisterPage';
import HomePage from './page-components/HomePage';
import EditPage from './page-components/EditPage';
import ToDoPage from './page-components/ToDoPage';


function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginPage}/>
      <Route exact path='/login' component={LoginPage}/>
      <Route exact path='/register' component={RegisterPage}/>
      <Route exact path='/home' component={HomePage}/>
      <Route exact path='/edit' component={EditPage}/>
      <Route exact path='/todo' component={ToDoPage}/>

    </div>
  );
}

export default App;
