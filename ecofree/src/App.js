import React from 'react';
import { Route,Link,Switch } from 'react-router-dom';

import {Main,Cha,Song} from './menu';
import {CardFeed} from './menu/song';

function App() {
  return (
    <div>      
      
      <Switch>
        <Route path="/cha" component={Cha} />
        <Route path="/song/CardFeed" component={CardFeed} />
        <Route path="/song" component={Song} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;