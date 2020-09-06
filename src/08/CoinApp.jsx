import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './store/configureStore';

import AppLayout from './components/AppLayout';
import NotFound from './components/NotFound';
import MainPage from './components/main/AsyncMainPage';
import Notification from './containers/NotificationContainer';
import RouterStateContainer from './containers/RouterStateContainer';

import ModalProvider from './ModalProvider';

export default class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <RouterStateContainer />
          <ModalProvider>
            <AppLayout>
              <Switch>
                <Route path="/" exact render={() => <MainPage />} />
                {/*<Route path="*" component={NotFound} />*/}
                <Route
                  path="*"
                  render={({ match }) => <NotFound match={match} />}
                />
              </Switch>
              <Notification />
            </AppLayout>
          </ModalProvider>
        </Router>
      </Provider>
    );
  }
}
