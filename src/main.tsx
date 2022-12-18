import './index.css'
import chains from './chains.json'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {Anchor} from 'ual-anchor'
import {UALProvider, withUAL} from 'ual-reactjs-renderer'
import {JsonRpc} from 'eosjs'

import App from './components/App'
import store from './store'

const AppWithUAL = withUAL(App)
const anchor = new Anchor(
  [chains[0]], 
  {
    appName: 'vendettaciti',
    rpc: new JsonRpc('https://waxtestnet.greymass.com', {fetch})
  }
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <UALProvider chains={ [chains[0]] } authenticators={ [anchor] } appName={ 'vendettaciti' }>
        <AppWithUAL/>
      </UALProvider>
    </Provider>
  </React.StrictMode>,
)
