import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'

import SiteLayout from './pages/components/SiteLayout';

// PAGES
import Home from './pages/containers/Home';
import About from './pages/containers/About';

class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <SiteLayout exact path='/' component={Home} />
            <SiteLayout exact path='/about' component={About} />
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;