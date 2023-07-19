import React from 'react';
import Home from './Home';
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from 'react-router';
import Login from "./login/Login"
import Customer from './Customer/Customer';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/SingIn" exact={true} component={Login} />
        <Route path="/CustomerService" exact={true} component={Customer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
