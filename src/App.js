import React, { Component } from 'react';
import './scss/App.scss';
import Header from './components/header';
import Alypaa from './components/alypaa';


class App extends Component { // change to class component

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Alypaa />
      </div>
    );
  }
}

export default App;
