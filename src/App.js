import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
      // Replace with your Spring Boot API endpoint
      axios.get('http://localhost:8080/api/hello')
        .then(response => {
          setData(response.data);  // Save the response data to state
        })
        .catch(error => {
          console.error("There was an error fetching data!", error);
        });
    }, []);  // Empty array ensures this runs only once on component mount

    return (
      <div>
        <h1>Users List</h1>
        <div>
        {data}
        </div>
      </div>
    );
}

export default App;
