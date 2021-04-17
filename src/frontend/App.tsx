import React, { Component, ComponentType, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../lib/components/pages/HomePage'
import ItemPage from '../lib/components/pages/ItemPage'

const App = () => {

  const itemsArray: any[] = require('../lib/assets/items/items').itemsArray

  let routes: any[] = []

  itemsArray.forEach(item => {
    routes.push(
      <Route exact path={`/${item.name}`}>
        <ItemPage item={ item } />
      </Route>
    )
  })

  return (
    <div id="App">
      <HashRouter>
        <Switch>
          { routes }
          
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
