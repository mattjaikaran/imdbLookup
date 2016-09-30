import React from 'react';

const Contact = React.createClass({
  render() {
    return (
      <div className="contactMe">
        <h2>Contact</h2>
          <div className="socialIcons">
            <a href="http://github.com/mattjaikaran" target="new"><img src={require('../pics/github.png')} /></a>
            <a href="http://linkedin.com/in/mattjaikaran" target="new"><img src={require('../pics/linkedin.png')} /></a>
          </div>
        <div className="portfolioContent">
          <p><a href="http://mattjaikaran.com" target="new">mattjaikaran.com</a></p>
        </div>
      </div>
    );
  }
});

export default Contact;
