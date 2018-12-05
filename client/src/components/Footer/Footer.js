import React, { Component } from 'react';
import logo2 from '../../assets/assets/logo/pics-logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router";
// import './Footer.css';


class Footer extends Component {
    state = {  }
    render() { 
        return ( 
        
          <div className="foot1">
          <div className="container footBox">
          <div className="myDiv">
          <h1 onClick={() => {
            this.props.history.push("/");
            console.log(this.props);
            }}><img src={logo2} /><span className="foot-pics">PIAIC</span></h1>
          
            <div className="row" style={{marginTop: 50}}>
            
              <div className="col-lg-4 col-sm-6 mt-md-5 mt-5 mt-lg-0  foot-f1">
                <p>Locations</p>
                <ul>
                  <li>Head office: sadfsadfsdf</li>
                  <li>Islamabad: sdfasdf</li>
                  <li>Lahore: asdf asd</li>
                  <li>Peshawar: sdfsadf </li>
                  <li>Faisalabad: sdf sadf </li>
                  <li>Quetta: sadfsd</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 mt-md-5 mt-5 mt-lg-0 foot-f2">
              <p>Navigation</p>
                <ul>
                  <li>Artificial Intelligence</li>
                  <li>Cloud Native</li>
                  <li>About</li>
                  <li>Apply</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div className="col-lg-5 col-sm-12 mt-md-5 mt-5 mt-lg-0 foot-f3"> 
              <p>Join our mailing list</p>
                <input placeholder="Email Address" className="email-address" type="text" />
                <button className="submitBtn" >Submit</button>
                <p className="connnct-with-us">Connect with us</p>
      
              </div>
              
              </div>
            </div>
          </div>
        </div>
         
         );
    }
}
 
export default withRouter(Footer);