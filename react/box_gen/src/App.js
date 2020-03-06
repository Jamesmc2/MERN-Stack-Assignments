import React,{useState} from 'react';
import './App.css';
import Box from './components/Box'
function App() {
  const [form, setForm] = useState('');
  const [boxes, setBoxes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let box = {
      color : form
    }
    setBoxes(oldboxes => [...oldboxes, box])
    setForm('');
  }
  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='formgroup'>
          <label>Color:</label>
          <input type='text' value={form} onChange={(e) => setForm(e.target.value)} />
        </div>
        <input type='submit' value='Add Box'></input>
      </form>
      {
        boxes.map((box,idx) => {
          return <Box color={box.color} key={idx}/>
        })
      }
    </div>
  );
}

export default App;
