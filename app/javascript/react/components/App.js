import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import IndexContainer from './index-page/IndexContainer'
import ResortShowContainer from './show-page/ResortShowContainer'
import ProfileContainer from './profile-page/ProfileContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="resorts" />
        </Route>
        <Route exact path="/resorts" component={IndexContainer} />
        <Route exact path="/resorts/:id" component={ResortShowContainer} />
        <Route exact path="/profile-page" component={ProfileContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
