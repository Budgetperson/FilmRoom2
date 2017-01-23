import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App';
import AllPlayers from './containers/AllPlayers';
import AllGames from './containers/AllGames';
import EditingWorkspace from './components/EditingWorkspace';

import Store from './store';

const StoreInstance = Store();

const history = syncHistoryWithStore(browserHistory, StoreInstance);


ReactDOM.render(
  <Provider store={StoreInstance}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="players" component={AllPlayers} />
        <Route path="games" component={AllGames} />
        <Route path="workspace" component={EditingWorkspace} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
