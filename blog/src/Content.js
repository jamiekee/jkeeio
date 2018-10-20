import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Feed from './Feed'
import Post from './Post'

const Content = () => (
  <main>
    <Switch>
      <Route path='/post/:hash' component={ Post } />
      <Route component={ Feed }/>
    </Switch>
  </main>
)

export default Content
