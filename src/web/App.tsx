import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const onCountUp = () => setCount((count) => count + 1);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div>
        <button onClick={onCountUp}>Count</button>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
