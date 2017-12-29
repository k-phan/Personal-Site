import React from 'react';
import './NavBar.css';

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
          <div className="horizontalLinks">
            <a href="/">ABOUT ME 👋</a>
            <a href="/">EXPERIENCE 📝</a>
            <a href="/">PROJECTS 📐</a>
            <a href="/">RESUME 📎</a>
            <a href="/">THOUGHTS ✍</a>
          </div>
        </div>
        <div className="verticalNav">
          <i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
          <div className="verticalLinks">
            <a href="/" onClick={this.burgerToggleOff}>About Me</a>
            <a href="/" onClick={this.burgerToggleOff}>Experience</a>
            <a href="/" onClick={this.burgerToggleOff}>Projects</a>
            <a href="/" onClick={this.burgerToggleOff}>Resume</a>
            <a href="/" onClick={this.burgerToggleOff}>Thoughts</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;