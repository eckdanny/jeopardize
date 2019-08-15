import React from 'react'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import store from './store'
import Header from './Header'
import Welcome from './Welcome'
import CreateGame from './CreateGame'
import ActiveGame from './ActiveGame'
import AdminPopUpRenderer from './AdminPopUpRenderer'
import './App.module.css'
import Layout from './shared/layouts/Layout'
require('typeface-loved-by-the-king')

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <>
        <AdminPopUpRenderer />
        <Layout header={<Header />}>
          <Welcome path="/" />
          <CreateGame path="new/*" />
          <ActiveGame path="game" />
        </Layout>
      </>
    </Provider>
  )
}

export default App
