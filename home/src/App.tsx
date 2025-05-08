import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./index.css";


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
const App = () => {
  return (
    <BrowserRouter>

      <div className="remote-home">
        <header>
          <h1>HOME</h1>
          <nav>
            <ul>
              <li>
                <Link to="/mf1/home">Home</Link>
              </li>
              <li>
                <Link to="/mf1/about">About</Link>
              </li>
              <li>
                <Link to="/mf1/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/mf1/home" component={Home} />
            <Route path="/mf1/about" component={About} />
            <Route path="/mf1/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
      </BrowserRouter>

  );
};

export default App;