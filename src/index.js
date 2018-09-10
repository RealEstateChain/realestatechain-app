import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory , Router, IndexRoute, Route } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { Provider } from 'react-redux';

// Layouts
import App from './App'
//import HomeContainer from './layouts/home/HomeContainer'
import SearchContainer from './layouts/search/SearchContainer'
import PropWalletContainer from './layouts/prop-wallet/PropWalletContainer'
import ViewOnlyREDAContainer from './layouts/reda/ViewOnlyREDAContainer'

import store from './store'
import getWeb3 from './util/web3/getWeb3'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  shape: {
    borderRadius: '20px'
  }
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
            <IndexRoute component={PropWalletContainer} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/reda/:redaId" component={ViewOnlyREDAContainer} />
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  ),
  document.getElementById('root')
);
