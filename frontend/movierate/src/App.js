import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from './components/movies';
import ProtectedRoute from './common/protectedRoute';
import MovieDetail from './components/movieDetail';
import Login from './components/login';
import auth from './services/authService'
import MovieNew from './components/movieNew';

const Home = () => {
  return <h1>Home</h1>;
};

const NotFound = () => {
  return <h1>Not Found</h1>;
};

function App() {
  const user = auth.getCurrentUser()

  return (
    <div>
      {user && (<NavBar />)}
      <main className="container">
          <Switch>
            <Route path="/login" component={ Login } />
            <ProtectedRoute path="/movies/new" component={ MovieNew } />
            <ProtectedRoute path="/movies/:id" component={ MovieDetail } />
            <ProtectedRoute path="/movies" component={ Movies } />
            <ProtectedRoute path="/home" component={ Home } />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
    </div>
  );
}

export default App;
