import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IndexContainer from './index-page/IndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/resorts" component={IndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
