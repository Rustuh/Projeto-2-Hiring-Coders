import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Costumer from './pages/Costumer';
import Products from './pages/Product';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/costumer" component= {Costumer}/>
        <Route path="/product" component= {Products}/>
      </Switch>
    </BrowserRouter>
  )
}

