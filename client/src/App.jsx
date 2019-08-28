import React, { useState } from 'react';
import './App.css';

function App() {
  useState(() => {
    console.log('lamo');
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload. lmao
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
