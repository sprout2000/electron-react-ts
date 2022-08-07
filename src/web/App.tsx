import { useState } from 'react';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Count</button>
    </div>
  );
};

export default App;
