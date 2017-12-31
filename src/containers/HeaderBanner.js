import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './HeaderBanner.css';
import BannerMessage from '../components/BannerMessage.js';
import headerBackground from '../images/MainHeaderDark.svg';

const messages = [
  '',
  'Software Engineer 💻',
  '',
  'Dancer 🕺',
  '',
  'Gamer 🎮',
  '',
  'Addicted to Sushi 🍣'
];

class HeaderBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      bannerMessageIndex: 0, 
      bannerDisplayMessage: messages[0]
    };
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.changeMessage(),
      1250
    );
  }

  componentWillunmount() {
    clearInterval(this.timer);
  }

  changeMessage() {
    var newIndex = this.state.bannerMessageIndex + 1;
    if(newIndex === messages.length) newIndex = 0;
    this.setState({
      bannerMessageIndex: newIndex,
      bannerDisplayMessage: messages[newIndex]
    })
  }

  render() {
    return (
      <div className="header-banner">
        <img className="header-banner-bg" src={headerBackground} alt=""></img>      
        <ReactCSSTransitionGroup
          transitionName="banner-fade"
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={600}>
          <BannerMessage 
            key={this.state.bannerMessageIndex}
            message={this.state.bannerDisplayMessage}
          />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default HeaderBanner;
