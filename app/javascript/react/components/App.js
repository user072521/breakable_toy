import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexContainer from './index-page/IndexContainer'
import ResortShowContainer from './show-page/ResortShowContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/resorts" component={IndexContainer} />
        <Route exact path="/resorts/:id" component={ResortShowContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
