import React, { Component } from 'react';
import { withRouter } from "react-router";




class Programs extends Component {
    state = {  }
    render() { 
        return ( <div>
          

          <div className="box1">
          
            <div className="container pt-5 box1-cont" style={{paddingBottom: "320px"}}>
              <div className="box1-cont-head">
              <h1 className="text-lg-left text-md-center">Available Programs</h1>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-xs-12 mt-5 d-flex justify-content-center">
                <div onClick={() => {this.props.history.push("artificial-inteligence")}} className="box1-cont-flex-box " style={{backgroundColor: "rgb(25, 42, 86)"}}>
                
                <p className="align-middle boxTxt text-truncate">Artificial Intelligence</p>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12 mt-5 d-flex justify-content-center">
                <div onClick={() => {this.props.history.push("cloud-native")}} className="box1-cont-flex-box" style={{backgroundColor: "rgb(225, 0, 106)"}}>
                <p className="align-middle boxTxt text-truncate">Cloud Native Computing</p></div>
                </div>
                <div className="col-lg-4 col-md-12 col-xs-12 mt-5 mt-md-5 d-flex justify-content-center">
                <div onClick={() => {this.props.history.push("#")}} className="box1-cont-flex-box" style={{backgroundColor: "rgb(117, 123, 126)"}}>
                <p className="align-middle boxTxt">Coming Soon</p></div>
                </div>
              </div>
            </div>
  
          </div>  
          </div>);
    }
}
 
export default withRouter(Programs);