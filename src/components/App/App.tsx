import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../pages/Home/index";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
