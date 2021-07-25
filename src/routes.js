import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Customer from './pages/Customer';
import Products from './pages/Product';



export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path="/customer" component= {Customer}/>
        <Route path="/product" component= {Products}/>
      </Switch>
    </BrowserRouter>
  )
}

