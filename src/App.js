import React, { Component } from 'react';
import './App.css';
import InfoHeader from './components/InfoHeader';
import PrimaryList from './components/PrimaryList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoHeader />
        <PrimaryList/>
      </div>
    );
  }
}

export default App;
