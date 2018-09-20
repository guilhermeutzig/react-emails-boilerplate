import React from 'react';

import routes from 'constants/routes';

const Index = () => (
  <div className="container">
    <h1>React E-mails</h1>
    <p>List of routes created on constants/routes.js</p>
    <ul>
      {routes.map(({ path }, i) => {
        if (path != '') {
          return (
            <li key={i}>
              <a href={`/${path}`}>{path}</a>
            </li>
          );
        }
      })}
    </ul>
  </div>
);

export default Index;
