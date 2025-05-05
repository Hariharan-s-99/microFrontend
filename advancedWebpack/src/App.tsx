import React, { useLayoutEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import { MemoryHistory } from "history";

const App: React.FC<{ history: MemoryHistory }> = ({ history }) => {
  const [location, setLocation] = useState(history.location);

  useLayoutEffect(() => {
    const unlisten = history.listen(({ location }) => {
      console.log(location)
      setLocation(location);
    });
    return unlisten;
  }, [history]);

  return (
    <div className="webpack">
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
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
