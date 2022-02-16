import React, { useState } from "react";
import { UserContext } from './UserContext'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'


function App () {
  const [search, setSearch] = useState()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState()


  return (
    <UserContext.Provider value={{ search, setSearch, data, setData, isLoading, setIsLoading }}>
      <Router>

        <div>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/details/:name/:repo">
              <DetailsPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
