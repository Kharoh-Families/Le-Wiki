import React, { Component, ComponentType, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../lib/components/pages/HomePage'
import ItemPage from '../lib/components/pages/ItemPage'

const App = () => {

  const items: { [key: string]: [ { [key: string]: { [key: string]: any } } ] } = require('../lib/assets/items/items').items

  let routes: any[] = []

  Object.keys(items).forEach(entry => {
    Object.values(items[entry]).forEach(item => {
      console.log(item.name)
      routes.push(
        <Route exact path={`/${item.name}`}>
          <ItemPage item={ item } />
        </Route>
      )
    })
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
