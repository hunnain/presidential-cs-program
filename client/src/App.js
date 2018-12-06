import React, { Component } from 'react';
import './App.css';
import Routers from './Routes';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state = {
    onRoute : "/",
  }

  changeRoute = (route) => {
    this.setState({onRoute: route});
  }
  render() {
    return (
      <div>
        <Routers />
        
      </div>
    );
  }
}

export default App;
