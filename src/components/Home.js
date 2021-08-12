import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MenuBar from "./MenuBar";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuBar />
        <Footer />
      </div>
    );
  }
}

export default Home;
