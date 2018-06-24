import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
//import { DrizzleProvider } from 'drizzle-react'
import { Provider } from 'react-redux';

// Layouts
import App from './App'
//import HomeContainer from './layouts/home/HomeContainer'
import SearchContainer from './layouts/search/SearchContainer'
import DashboardContainer from './layouts/dashboard/DashboardContainer'

import store from './store'
import drizzleOptions from './drizzleOptions'
import getWeb3 from './util/web3/getWeb3'
import services from './services'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

getWeb3
.then(results => {
  console.log('Web3 initialized!')
  //console.dir(services.web3.getAccount())
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={DashboardContainer} />
            { /* <Route path="/home" component={HomeContainer} /> */ }
            <Route path="/search" component={SearchContainer} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  ),
  document.getElementById('root')
);
