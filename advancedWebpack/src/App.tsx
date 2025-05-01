import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';


const App: React.FC = () => {
  return (
    <div className="webpack">
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </main>
    </div>
  );
};

export default App;