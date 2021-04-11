import React, { Component, ComponentType, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './lib/components/Home'

const App = () => {

  const items: { [key: string]: [ { [key: string]: any } ] } = require('./lib/assets/items/items').items
  console.log(require('./lib/assets/items/items').items)

  let routes: any[] = []

  Object.keys(items).forEach(entry => {
    console.log(entry, items[entry])
    Object.keys(items[entry]).forEach(item => {
      console.log(item)
      routes.push(
        <Route exact path={`/${item}`}>
          <span>{item}</span>
        </Route>
      )
    })
  })

  return (
    <div id="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          { routes }
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
