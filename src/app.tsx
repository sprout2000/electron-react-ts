import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const App = () => {
  return (
    <div className="container">
      <h1>Hello world.</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
