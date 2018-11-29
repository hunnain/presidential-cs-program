import React, { Component } from 'react';
import logo2 from '../../assets/assets/logo/pics-logo.svg'




class Footer extends Component {
    state = {  }
    render() { 
        return ( 
        
          <div className="foot1">
          <div class="container footBox">
          <h1><img src={logo2} /><span className="foot-pics">PIAIC</span></h1>
            <div class="row" style={{marginTop: 50}}>
              <div class="col-lg-3 col-sm-6 mt-md-5 mt-5 mt-lg-0  foot-f1">
                <p>Locations</p>
                <ul>
                  <li>Head office:</li>
                  <li>Islamabad:</li>
                  <li>Lahore:</li>
                  <li>Peshawar:</li>
                  <li>Faisalabad:</li>
                  <li>Quetta:</li>
                </ul>
              </div>
              <div class="col-lg-3 col-sm-6 mt-md-5 mt-5 mt-lg-0 foot-f2">
              <p>Navigation</p>
                <ul>
                  <li>Artificial Intelligence</li>
                  <li>Cloud Native</li>
                  <li>About</li>
                  <li>Apply</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div class="col-lg-6 col-sm-12 mt-md-5 mt-5 mt-lg-0 foot-f3"> 
              <p>Join our mailing list</p>
                <input placeholder="Email Address" className="email-address" type="text" />
                <button className="submitBtn" >Submit</button>
                <p className="connnct-with-us">Connect with us</p>
      
              </div>
              
              
            </div>
          </div>
        </div>
         
         );
    }
}
 
export default Footer;