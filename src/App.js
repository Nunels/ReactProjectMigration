import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RichiestaList } from "./components/richiesta-list/RichiestaListComponent";
import { MonitorServices } from "./components/monitor-services/MonitorServicesComponent";

import {
  Link,
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App background">
      <BrowserRouter>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
          <img src={logo} className="App-logo" alt="logo" />

          <a className="navbar-brand" href="/">
            <b>Monitoraggio PagoPa</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Monitor
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/richieste" className="nav-link">
                  Richieste
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <MonitorServices />
            </Route>
            <Route path="/richieste">
              <RichiestaList />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
