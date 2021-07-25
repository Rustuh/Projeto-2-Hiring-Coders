import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Custumer from './pages/Custumer';
import Products from './pages/Product';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/costumer" component= {Custumer}/>
        <Route path="/product" component= {Products}/>
      </Switch>
    </BrowserRouter>
  )
}

