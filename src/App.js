import React from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Accueil from './layouts/internaute/Accueil'
import Masterlayout from './layouts/admin/MasterLayout'
import LoginG from './components/LoginG.js';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route exact path='/' name='Accueil' render={(props)=> <Accueil {...props}/> } />
          <Route path='/admin' name='Admin' render={(props)=> <Masterlayout {...props} /> } />
          <Route path='/login-gestionnaire' name='LoginG' render={(props)=> <LoginG {...props} /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
