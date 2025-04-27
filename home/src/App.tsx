import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Route, Switch, Link } from 'react-router-dom';
import "./index.css";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Home Component
const Home: React.FC = () => {
  return (
    <div className="page">
      <h2>Home Link</h2>
    </div>
  );
};

// About Component
const About: React.FC = () => {
  return (
    <div className="page">
      <h2>About Link</h2>
    </div>
  );
};

// Contact Component
const Contact: React.FC = () => {
  return (
    <div className="page">
      <h2>Contact Link</h2>

    </div>
  );
};

// Not Found Component
const NotFound: React.FC = () => {
  return (
    <div className="page">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

// Main App Component
const App = ({history}: any) => {
  return (
    <Router history={history} >
      <div className="app">
        <header>
          <h1>HOME</h1>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;