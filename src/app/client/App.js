import {render} from 'react-dom';
import React from 'react';
import Game from './app/containers/Game';
import HomePage from './app/components/HomePage';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


const App = () =>  {
  return (
  <Router>
    <div>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/game" component={Game}/>
    </div>
  </Router>
)}

export default App;