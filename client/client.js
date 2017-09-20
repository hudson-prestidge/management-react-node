import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'

import App from './components/app'
import Landing from './components/landing'
import Users from './components/users'

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/users" component={Users}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
