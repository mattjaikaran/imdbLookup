import React, { Component } from 'react';
import Header from './containers/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
