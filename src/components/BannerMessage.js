import React from 'react';
import './BannerMessage.css';

function BannerMessage(props) {
  return (
    <h1 className="header-banner-msg" key="this.state.bannerMessageIndex">
      {props.message}
    </h1>
  );
}

export default BannerMessage;