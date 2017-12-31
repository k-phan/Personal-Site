import React from 'react';
import './MainHeader.css';
import HeaderBanner from './HeaderBanner.js';

class MainHeader extends React.Component {
  render() {
    return (
      <div className="main-header">
        <HeaderBanner></HeaderBanner>
      </div>
    );
  }
}

export default MainHeader;
