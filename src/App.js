import React from 'react';
import Home from './Home';
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from 'react-router';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
