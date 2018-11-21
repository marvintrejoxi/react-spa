import React, { Component, Fragment } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import SiteLayout from './pages/components/SiteLayout';

// PAGES
import Login from './pages/containers/users/Login';
import Posts from './pages/containers/users/Posts';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Route exact path='/' component={Login} />
            <SiteLayout exact path='/posts' component={Posts} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;