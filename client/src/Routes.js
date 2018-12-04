import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Form from './components/Form/form';
import CloudNative from './components/CloudNative/cloudNative';
import Ai from './components/Ai/ai';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright/Copyright';


import history from './History';


class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                     <Navbar />
                
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/apply" component={Form} />
                    <Route exact path="/ai" component={CloudNative} />
                    <Route exact path="/cloudnative" component={Ai} />
                   
        <Copyright />
                    
                </div>
            </Router>
        )
    }
}

export default Routers;