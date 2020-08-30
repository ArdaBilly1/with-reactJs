import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import signup from './pages/signup';
import login from './pages/login';
// import home from './pages/home';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            {/* <Route exact path="/home" component={home}/> */}
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
