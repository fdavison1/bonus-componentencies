import React from 'react';
import './App.css';
import routes from './routes'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
     <Link to='/'>
     <button>back</button>
     </Link>
    {routes}

    </div>
  );
}

export default App;
