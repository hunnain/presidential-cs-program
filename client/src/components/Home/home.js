import React, { Component } from 'react';
import './home.css';
import News from '../News/News';
import Programs from '../Programs/Programs';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';
import HomeVideo from '../HomeVideo/HomeVideo';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <HomeVideo />
        <Programs />
        <News />
        <Footer />
        <Copyright />
      </div >
    );
  }
}

export default Home;
