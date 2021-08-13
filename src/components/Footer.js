import React, { Component } from "react";

class Footer extends Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div>
        <p className="footer">
          Copyright © {currentYear} Byeonghoon Jeon(Nathan Jeon)
        </p>
      </div>
    );
  }
}

export default Footer;
