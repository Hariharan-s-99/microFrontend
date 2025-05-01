import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h2>Home Page</h2>
      <p>Welcome to our React TypeScript application built with Webpack 5!</p>
      <div className="feature-cards">
        <div className="card">
          <h3>React 16</h3>
          <p>Built with React 16 for stable component-based architecture</p>
        </div>
        <div className="card">
          <h3>TypeScript</h3>
          <p>Enhanced with TypeScript for type safety and better developer experience</p>
        </div>
        <div className="card">
          <h3>Webpack 5</h3>
          <p>Powered by Webpack 5 for efficient bundling and fast development</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
