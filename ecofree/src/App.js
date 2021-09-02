import React from 'react';
import About from './About';
import Home from './Home';
import { Route,Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
      </ul>
      <Route path="/about" component={About} />
      <Route path={['/','/test']} component={Home} exact/>
    </div>
  );
}

export default App;