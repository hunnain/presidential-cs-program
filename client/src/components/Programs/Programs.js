import React, { Component } from 'react';




class Programs extends Component {
    state = {  }
    render() { 
        return ( 
          <div className="box1">
          <center>
            <div className="box1-cont">
              <div className="box1-cont-head">
              <h1>Available Programs</h1>
              </div>
              <div className="box1-cont-flexbox">
                <div className="box1-cont-flex">
                <div className="box1-cont-flex-box" style={{backgroundColor: "rgb(25, 42, 86)"}}>
                
                <p class="align-middle boxTxt">Artificial Intelligence</p>
                </div>
                </div>
                <div className="box1-cont-flex">
                <div className="box1-cont-flex-box" style={{backgroundColor: "rgb(225, 0, 106)"}}>
                <p class="align-middle boxTxt">Cloud Native Computing</p></div>
                </div>
                <div className="box1-cont-flex">
                <div className="box1-cont-flex-box" style={{backgroundColor: "rgb(117, 123, 126)"}}>
                <p class="align-middle boxTxt">Coming Soon</p></div>
                </div>
              </div>
            </div>
  
          </center>
          </div>  
         );
    }
}
 
export default Programs;