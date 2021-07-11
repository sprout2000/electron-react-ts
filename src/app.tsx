import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './app.scss';

const { myAPI } = window;

const App = () => {
  const [filelist, setFilelist] = useState<string[]>([]);

  const onClick = async () => {
    const getPath = await myAPI.openDialog();

    if (getPath) setFilelist(getPath);
  };

  return (
    <div className="container">
      <h1>Hello world.</h1>
      <button onClick={onClick} className="open-button">
        Open
      </button>
      <div>
        <ul>
          {filelist.map((item, index) => (
            <li className="list" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
