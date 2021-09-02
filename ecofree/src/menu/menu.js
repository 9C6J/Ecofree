import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <ul>
        <li>
        <Link to="/song">송준호</Link>
        </li>
        <li>
        <Link to="/cha">차재영</Link>
        </li>        
      </ul>
    </div>
  );
}

export default Menu;
