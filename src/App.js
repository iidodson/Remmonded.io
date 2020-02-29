import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import UserPlaces from "./places/pages/UserPlaces";
import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlaces"
import MainNavigation from "./shared/Navigation/MainNavigation"


function App() {
  return (
      <Router>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userID/places" exact> 
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlaces />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
  );
}

export default App;
