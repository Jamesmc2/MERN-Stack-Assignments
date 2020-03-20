import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <Main path="/"/>
        <Detail path="get_authors/:id" />
        <Update path="get_authors/:id/edit" />
      </Router>
    </div>
  );
}
export default App;
