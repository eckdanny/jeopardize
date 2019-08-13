import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import store from './store'
import GameShell from './GameShell'
import Header from './Header'
import Welcome from './Welcome'
import CreateGame from './CreateGame'
import AdminPopUpRenderer from './AdminPopUpRenderer'
import './App.module.css'
import Main from './shared/layouts/Main'
const myFont = require('typeface-loved-by-the-king')

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <>
        <AdminPopUpRenderer />
        <Main header={<Header />}>
          <Welcome path="/" />
          <CreateGame path="/new" />
          <GameShell path="/game" />
        </Main>
      </>
    </Provider>
  )
}

export default App
