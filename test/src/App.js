import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [country,setCountry] = useState({
    con:"",
  });

  const handleSubmit = async () => {
    try {
      console.log(country);
      
    } catch (error) {
      console.error("Error registering donator:", error);
    }
  };
  const handlechange =  (e) => {
    setCountry({...country,[e.target.name] : e.target.vale})
  };

  return (
    <div className="App">
      
      <div className="input-group">
  <div className="form-outline" data-mdb-input-init>
    <input type="search" id="form1" className="form-control" value={country} onChange={handlechange}/>
    <label className="form-label" for="form1">Search</label>
  </div>
  <button onClick={handleSubmit} type="button" className="btn btn-primary" data-mdb-ripple-init>
    search
  </button>
</div>
    </div>
  );
}

export default App;
