import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import addUserReducer from './store/reducer';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import Velcome from './components/velcome/Velcome';
import Account from './components/account/Account';
import NotFound from "./components/notFound/NotFound";
import './App.css';

const store = createStore(addUserReducer);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={Velcome} exact/>
        <Route path="/registration" component={Registration} exact/>
        <Route path='/account' component={Account} exact/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
