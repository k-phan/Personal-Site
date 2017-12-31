import React from 'react';
import './NavBar.css';
import logo from '../images/KhaiPhanLogo.svg';

class NavBar extends React.Component {
  burgerToggle() {
    let links = document.querySelector('.verticalLinks');
    if(links.style.display === 'block') {
      links.style.display = 'none';
    } else {
      links.style.display ='block';
    }
  }

  burgerToggleOff() {
    let links = document.querySelector('.verticalLinks');
    links.style.display = 'none';
  }

  render() {
    return (
      <nav>
        <div className="horizontalNav">
          <div className="brand">
            <a href="/">
              <img className="brand-logo" src={logo} alt="logo"></img>
            </a>
            <a className="brand-name" href="/">KHAI PHAN</a>
          </div>
          <div className="horizontalLinks">
            <a href="/">ABOUT ME <span role="img" aria-label="Wave">👋</span></a>
            <a href="/">EXPERIENCE <span role="img" aria-label="Memo">📝</span></a>
            <a href="/">PROJECTS <span role="img" aria-label="TriRuler">📐</span></a>
            <a href="/">RESUME <span role="img" aria-label="PaperClip">📎</span></a>
            <a href="/">THOUGHTS <span role="img" aria-label="Writing">✍</span></a>
          </div>
        </div>
        <div className="verticalNav">
          <div className="row vertical-brand">
            <a href="/">
              <img className="brand-logo" src={logo} alt="logo"></img>
            </a>
            <a className="brand-name" href="/">KHAI PHAN</a>
            <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          </div>
          <div className="verticalLinks">
            <a href="/" onClick={this.burgerToggleOff}>About Me <span role="img" aria-label="Wave">👋</span></a>
            <a href="/" onClick={this.burgerToggleOff}>Experience <span role="img" aria-label="Memo">📝</span></a>
            <a href="/" onClick={this.burgerToggleOff}>Projects <span role="img" aria-label="TriRuler">📐</span></a>
            <a href="/" onClick={this.burgerToggleOff}>Resume <span role="img" aria-label="PaperClip">📎</span></a>
            <a href="/" onClick={this.burgerToggleOff}>Thoughts <span role="img" aria-label="Writing">✍</span></a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;