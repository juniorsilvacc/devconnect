import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Signin from './pages/Signin';
import Register from './pages/Register';
import Feed from './pages/Feed';
import NewPost from './pages/NewPost';

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin}>
          <Signin/>
        </Route>

        <Route path="/register" component={Register}>
          <Register/>
        </Route>

        <Route path="/feed" component={Feed}>
          <Feed/>
        </Route>

        <Route path="/post" component={NewPost}>
          <NewPost/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default routes