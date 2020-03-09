import React,{useState} from 'react';

import './App.css';
import axios from 'axios'

function App() {
  const [state, setState] = useState([])
  const clickHandler = e => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000")
      .then(response => {
        console.log(response)
        setState(response.data.results)
      }).catch(err => {
        console.log(err);
      });
  }


  return (
    <div className="App">
      <input type='button' value='Fetch Pokemon!' onClick={(e) => clickHandler(e)} />
      {
        state.map((individual, idx) => 
          <li key={idx}>
            {individual.name}
          </li>
        )
      }
    </div>
  );
}

export default App;
