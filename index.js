import React from 'react'
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { rootReducer } from './src/redux/rootReduser'

const store = createStore(rootReducer)

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => app);
