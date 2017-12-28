import React from 'react';
import './App.css';
import headerBackground from '../images/MainHeader.svg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="header-banner-bg" src={headerBackground}></img>
        
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
