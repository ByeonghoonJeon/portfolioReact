import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./PortfolioCards";

class Gallery extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default Gallery;
