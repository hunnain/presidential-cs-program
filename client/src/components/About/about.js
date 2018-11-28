import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutPresident from './About_President/index';

class About extends Component {
    render() {
        return (
            <div>

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/form'>Forms</Link></li>
                    <li><Link to='/ai'>Ai</Link></li>
                    <li><Link to='/cloudnative'>cloudNative</Link></li>
                </ul>
                <AboutPresident />
                 
            </div>
        );
    }
}

export default About;
