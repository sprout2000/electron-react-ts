import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const App = () => {
  const [count, setCount] = useState(0);

  const onCountUp = () => setCount((count) => count + 1);
  const onCountDown = () => setCount((count) => count - 1);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div>
        <button onClick={onCountDown}>&#x25BC;</button>
        <button onClick={onCountUp}>&#x25B2;</button>
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
