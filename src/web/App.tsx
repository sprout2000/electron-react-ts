import { useEffect, useState } from "react";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.myAPI.updateTitle(count);
  }, [count]);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Count
      </button>
    </div>
  );
};
