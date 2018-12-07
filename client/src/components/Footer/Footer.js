import React, { Component } from 'react';
import logo2 from '../../assets/assets/logo/pics-logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router";
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap-social/bootstrap-social.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import youtubeIcon from '../../assets/ytIcon.svg';
import facebookIcon from '../../assets/fbIcon.svg';
import twiterIcon from '../../assets/tIcon.svg';
import './Footer.css';



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
                  <li className="text-truncate">Head office: <a  href="https://goo.gl/maps/y1G4vrtQPiL2">https://goo.gl/maps/y1G4vrtQPiL2</a></li>
                  <li className="text-truncate">Islamabad: <a href="https://goo.gl/maps/rhhVXeVdc6q">https://goo.gl/maps/rhhVXeVdc6q</a></li>
                  {/* <li>Lahore: asdf asd</li>
                  <li>Peshawar: sdfsadf </li>
                  <li>Faisalabad: sdf sadf </li>
                  <li>Quetta: sadfsd</li> */}
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 mt-md-5 mt-5 mt-lg-0 foot-f2">
              <p>Navigation</p>
                <ul>
                  <li onClick={() => {this.props.history.push("artificial-inteligence")}} className="truncate">Artificial Intelligence</li>
                  <li onClick={() => {this.props.history.push("cloud-native")}}>Cloud Native</li>
                  <li onClick={() => {this.props.history.push("about")}}>About</li>
                  <li onClick={() => {this.props.history.push("managementcommittee")}}>Management Committee</li>
                  {/* <li onClick={() => {this.props.history.push("apply")}}>Apply</li> */}
                  <li onClick={() => {this.props.history.push("contact")}}>Subscribe</li>
                </ul>
              </div>
              <div className="col-lg-5 col-sm-12  mt-lg-0 foot-f3"> 
              {/* <p>Join our mailing list</p>
                <input placeholder="Email Address" className="email-address" type="text" />
                <button className="submitBtn" >Submit</button> */}
                <p className="mt-0 connnct-with-us">Connect with us</p>
                  <div className="footericons mb-5">
                    <img src={youtubeIcon} />
                    <img src={facebookIcon} />
                    <img src={twiterIcon} />
                  </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
         
         );
    }
}
 
export default withRouter(Footer);