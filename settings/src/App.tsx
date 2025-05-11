import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Link, MemoryRouter, Routes } from 'react-router-dom';
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
const App = () => {
  return (
    <MemoryRouter basename="mf2">
      <div className="remote-settings">
        <header>
          <h1>SETTINGS</h1>
          <nav>
            <ul>
              <li>
                <Link to="/mf2/home">Settings</Link>
              </li>
              <li>
                <Link to="/mf2/Email">Email</Link>
              </li>
              <li>
                <Link to="/mf2/Billing">Billing</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route  path="/home" Component={Settings} />
            <Route path="/email" Component={Email} />
            <Route path="/billing" Component={Billing} />
            <Route Component={NotFound} />
          </Routes>
        </main>
      </div>
    </MemoryRouter>
  );
};

export default App;