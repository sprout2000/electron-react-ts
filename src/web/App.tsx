import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const onCountUp = () => setCount((count) => count + 1);
  const onCountDown = () => setCount((count) => count - 1);

  useEffect(() => {
    window.myAPI.update(count);
  }, [count]);

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
