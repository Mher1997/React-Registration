import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Velcome from './components/velcome/Velcome';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route path="/" component={Velcome} exact/>
      <Route path="/registration" component={Registration} exact/>
    </Switch>
  </BrowserRouter>
);

export default App;
