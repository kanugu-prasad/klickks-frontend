
import './App.css';
import React from "react";
import {Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
const App=()=>(    
      <div className="bg-container">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/login" />
        </Switch>
      </div>
      
  );


export default App;
