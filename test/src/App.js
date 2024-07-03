import './App.css';
import React, { useState, useEffect } from 'react';
import UniversityCard from './component/UniversityCard';


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
      <div>
        {<div className="row">
        {universities.map((uni, index) => (
          <UniversityCard key={index} university={uni} index={index}/>
        ))}
      </div>}
      </div>
    </div>
  );
}

export default App;