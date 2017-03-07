import React, { Component } from 'react';

import './scss/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Map from './components/map';

class App extends Component {

  render() {
    return (
        <div className="wrapper">
          <Header />
          <Map />
            {this.props.children}
          <Footer />
        </div>
    );
  }
}

export default App;
