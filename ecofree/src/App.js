import React from 'react';
import { Route,Link,Switch } from 'react-router-dom';

import {Main,Cha,Song} from './menu';

function App() {
  return (
    <div>      
      
      <Switch>
        <Route path="/Cha" component={Cha} />
        <Route path="/Song" component={Song} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;