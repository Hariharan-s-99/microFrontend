import React, { useLayoutEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import { BrowserHistory, MemoryHistory } from "history";

const App: React.FC= () => {

  return (
    <div className="webpack">
      <nav className="navigation">
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

      <main className="content">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="*" Component={() => <h2>Page not found</h2>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
