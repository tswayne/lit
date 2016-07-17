import {render} from 'react-dom';
import React from 'react';
import Game from './app/containers/Game';
import HomePage from './app/components/HomePage';
import { Router, Route, browserHistory } from 'react-router'


render(
  <Router history={browserHistory}>
    <Route path="/" component={HomePage}/>
    <Route path="/game" component={Game}/>
  </Router>
, document.getElementById('app'));

