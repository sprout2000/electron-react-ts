import { useState } from 'react';

import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const onCountUp = () => setCount((count) => count + 1);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={onCountUp}>Count</button>
    </div>
  );
};

export default App;
