import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

// redux imports 
import appStore from './redux/store/store';
import { Provider } from 'react-redux';

// layout components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Router>
          <div className="App">
            <Header />
            <Main />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
