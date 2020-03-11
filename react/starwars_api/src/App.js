import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Router } from '@reach/router';
import { navigate } from '@reach/router';
import People from './components/People';
import Starships from './components/Starships'
import Planets from './components/Planets'
import Films from './components/Films'
import Vehicles from './components/Vehicles'
import Species from './components/Species'



function App() {
  const [state, setState] = useState({})
  const [id, setId] = useState('')
  const [dropdown, setDropdown] = useState('people')
  const clickHandler = e => {
    axios.get("https://swapi.co/api/" + dropdown + '/' + id)
      .then(response => {
        setState(response.data)
        navigate(`/${dropdown}/${id}`)
      }).catch(err => {
        console.log(err)
      })
  }


return (
  <div className="App">
    <select onChange={(e) => setDropdown(e.target.value)}>
      <option value='people'>People</option>
      <option value='planets'>Planets</option>
      <option value='films'>Films</option>
      <option value='species'>Species</option>
      <option value='vehicles'>Vehicles</option>
      <option value='starships'>Starships</option>
    </select><br />
    <span>ID:</span>
    <input type='text' onChange={(e) => setId(e.target.value)} /><br /><br />
    <input type='button' value='Search' onClick={(e) => clickHandler(e)} />
    <br />
    <Router>
      <People path='/people/:id' info={state} />
      <Starships path='/starships/:id' info={state} />
      <Planets path='/planets/:id' info={state} />
      <Films path='/films/:id' info={state} />
      <Vehicles path='/vehicles/:id' info={state} />
      <Species path='/species/:id' info={state} />
    </Router>
  </div>
);
}

export default App;
