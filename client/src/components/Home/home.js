import React, { Component } from 'react';
import './home.css';
import News from './News/News';
import Programs from './Programs/Programs';
import Footer from '../Footer/Footer';
import HomeVideo from './HomeVideo/HomeVideo';
import Countdown from './Countdown/Countdown';
class Home extends Component {
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <HomeVideo />
        <Programs />
        
        {
          /*
          <News />
          */
        }
        
        <Footer />
      </div >
    );
  }
}

export default Home;
