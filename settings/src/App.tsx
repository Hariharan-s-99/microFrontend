import React from "react";
import ReactDOM from "react-dom/client";
import { Router, Route, Switch, Link } from 'react-router-dom';
import "./index.css";

// Home Component
const Settings: React.FC = () => {
  return (
    <div className="page">
      <h2>Settings Link</h2>

    </div>
  );
};

// About Component
const Email: React.FC = () => {
  return (
    <div className="page">
      <h2>Email Link</h2>
    </div>
  );
};

// Contact Component
const Billing: React.FC = () => {
  return (
    <div className="page">
      <h2>Billing Link</h2>
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
const App = ({ history }: { history: any }) => {
  return (
    <Router history={history} >
      <div className="remote-settings">
        <header>
          <h1>SETTINGS</h1>
          <nav>
            <ul>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/Email">Email</Link>
              </li>
              <li>
                <Link to="/Billing">Billing</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/settings" component={Settings} />
            <Route path="/email" component={Email} />
            <Route path="/billing" component={Billing} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;