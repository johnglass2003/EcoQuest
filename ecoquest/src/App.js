import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);  // State to store the data

  // Fetch data from the API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/data') // URL of your backend route
      .then(response => {
        // On success, set the data to the state
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
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
        <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              <p><strong>id:</strong> {item.id} <strong>username:</strong> '{item.username}'</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      </header>
    </div>
  );
}

export default App;
