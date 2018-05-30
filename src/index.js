import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
//import { DrizzleProvider } from 'drizzle-react'
import { Provider } from 'react-redux';

// Layouts
import App from './App'
//import HomeContainer from './layouts/home/HomeContainer'
import DashboardContainer from './layouts/dashboard/DashboardContainer'
//import { LoadingContainer } from 'drizzle-react-components'

import configureStore from './store'
import drizzleOptions from './drizzleOptions'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const store = configureStore();
// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render((
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={DashboardContainer} />
            { /* <Route path="/home" component={HomeContainer} /> */ }
          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  ),
  document.getElementById('root')
);
