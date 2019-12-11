import React from 'react'
import { Switch, Route } from 'react-router-dom'
import List from './List'
import NoMatch from './components/NoMatch'
import CSS from './components/CSS'

export default (
    <Switch>
        <Route exact path='/' component={List} />
        <Route path='/css' component={CSS} />
        <Route component={NoMatch} />
    </Switch>
)