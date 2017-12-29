import React from 'react';
import './App.css';
import MainHeader from './MainHeader.js';
import NavBar from './NavBar.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <MainHeader></MainHeader>
      </div>
    );
  }
}

export default App;
