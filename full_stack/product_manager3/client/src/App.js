import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="get_products/"/>
        <Detail path="get_products/:id" />
        <Update path="get_products/:id/edit" />
      </Router>
    </div>
  );
}
export default App;
