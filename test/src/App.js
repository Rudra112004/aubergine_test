import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);

  const searchByCountry = async () => {
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
    const data = await response.json();
    setUniversities(data);
    console.log(universities)
  };

  
  return (
    <div className="App">
      <h1>University Search</h1>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="Enter country name"
      />
      <button onClick={searchByCountry}>Search</button>
      <div className="university-cards">
        {universities.map((uni, index) => (
          <div className="card" key={index}>
            <h2>{uni.name}</h2>
            <a href={uni.web_pages[0]} target="_blank" rel="noopener noreferrer">
              {uni.web_pages[0]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;