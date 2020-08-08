import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from './components/movies';

function App() {
  return (
    <div>
      <NavBar />

      <main className="container">
          <Switch>
            <Route path="/movies" component={ Movies } />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
    </div>
  );
}

export default App;
