import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import App from './components/app'
import Landing from './components/landing'


render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Landing}>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
