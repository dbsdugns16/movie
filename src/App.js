import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';

function App() {

  useEffect(()=>{
    fetch("http://localhost:8080/api")
    .then(res=>res.json())
    .then(data=>console.log(data));
  });

  return (
    <div className="App">
      Test
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;