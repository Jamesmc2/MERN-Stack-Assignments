import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo'

function App() {
  const [wishList, setWishList] = useState([]);
  const [wish, setWish] = useState('');
  const AddWish = e => {
    e.preventDefault();
    let todo = {
      task : wish,
      isClicked : false
    }
    setWishList(
      oldwishList => [...oldwishList, todo]
    )
    setWish('');
  }
  const handleCheck = (e,idx) => {
    let todo = wishList[idx];
    todo.isClicked = !todo.isClicked;
    setWishList([...wishList.slice(0,idx),todo,...wishList.slice(idx+1)])
  }
  const handleDestroy = (e,idx) => {
    e.preventDefault();
    setWishList([...wishList.slice(0,idx),...wishList.slice(idx+1)])
  }

  return (
    <div className="App">
      <form onSubmit={(e) => AddWish(e)}>
        <input type='text' value={wish} onChange={(e) => setWish(e.target.value)} />
        <input type='submit'></input>
      </form>
      <h2>Wishes:</h2>
      {
        wishList.map((todo,idx) => {
        return <Todo key={idx} todo={todo} idx={idx} handleCheck={handleCheck} handleDestroy={handleDestroy}/>
        })
      }
    </div>
  );
}

export default App;
