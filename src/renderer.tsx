import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const App = () => {
  const [count, setCount] = useState(0);

  const onCountUp = () => setCount((count) => count + 1);
  const onCountDown = () => setCount((count) => count - 1);

  return (
    <div className="container">
      <h1>Hello.</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={onCountDown}>Down</button>
        <button onClick={onCountUp}>Up</button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
