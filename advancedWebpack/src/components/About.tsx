import React from 'react';


const About: React.FC = () => {
  return (
    <div className="page-container">
      <h2>About Page</h2>
      <p>This is a modern React application with TypeScript that demonstrates routing with React Router.</p>
      <div className="info-section">
        <div className="info-block">
          <h3>Our Mission</h3>
          <p>Building scalable and maintainable front-end applications with the latest technologies.</p>
        </div>
        <div className="info-block">
          <h3>Technologies</h3>
          <ul className="tech-list">
            <li>React 16</li>
            <li>TypeScript</li>
            <li>Webpack 5</li>
            <li>React Router</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;