import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router";
import './ManagementCommittee.css';
import StrategicPartners from './StrategicPartners/StrategicPartners';
import Modal from './Modal/Modal';



class ManagementCommittee extends Component {
    state = { 
      condition:false
     }


     hideModal = () => {
       const {condition} = this.state;
       this.setState({condition: !condition})
     }
    

    render() { 
      const {condition} = this.state;
        return ( 
        <div className="container App mcCont">
        <Modal condition={condition} hideModal={this.hideModal}/>
          <div className="row">
            <div className="col-12  d-flex justify-content-center align-items-center">
              <h1 className="mcHeading">MANAGEMENT COMMITTEE</h1>
              
            </div>
            <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
             <div className="cardBody ">
                <div className="imgHead">
                {/* <center> */}
                   <div className="greenCir"></div>
                   <div className="whiteCir"></div>
                   <div className="imgDiv"></div>

                {/* </center> */}
                </div>
                <h1>Zia Ullah Khan</h1>
                <p>Founder and CEO panacloud</p>
                <div className="spans d-flex justify-content-center align-items-center">
                <div>
                <ul>
                  <li> <div className="span span1"></div></li>
                  <li> <div className="span span2"></div></li>
                  <li> <div className="span span3"></div></li>
                </ul>
                </div>
              
                </div>
                <br />
               
                <button onClick={() => {this.setState({condition: true})}}>Read more</button>
                
              </div>
            
            </div>
            <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
             <div className="cardBody ">
                <div className="imgHead">
                {/* <center> */}
                   <div className="greenCir"></div>
                   <div className="whiteCir"></div>
                   <div className="imgDiv"></div>

                {/* </center> */}
                </div>
                <h1>Zia Ullah Khan</h1>
                <p>Founder and CEO panacloud</p>
                <div className="spans d-flex justify-content-center align-items-center">
                <div>
                <ul>
                  <li> <div className="span span1"></div></li>
                  <li> <div className="span span2"></div></li>
                  <li> <div className="span span3"></div></li>
                </ul>
                </div>
              
                </div>
                <br />
               
                <button onClick={() => {this.setState({condition: true})}}>Read more</button>
                
              </div>
            
            </div>
            <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
             <div className="cardBody ">
                <div className="imgHead">
                {/* <center> */}
                   <div className="greenCir"></div>
                   <div className="whiteCir"></div>
                   <div className="imgDiv"></div>

                {/* </center> */}
                </div>
                <h1>Zia Ullah Khan</h1>
                <p>Founder and CEO panacloud</p>
                <div className="spans d-flex justify-content-center align-items-center">
                <div>
                <ul>
                  <li> <div className="span span1"></div></li>
                  <li> <div className="span span2"></div></li>
                  <li> <div className="span span3"></div></li>
                </ul>
                </div>
              
                </div>
                <br />
               
                <button onClick={() => {this.setState({condition: true})}}>Read more</button>
                
              </div>
            
            </div>
            <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
             <div className="cardBody ">
                <div className="imgHead">
                {/* <center> */}
                   <div className="greenCir"></div>
                   <div className="whiteCir"></div>
                   <div className="imgDiv"></div>

                {/* </center> */}
                </div>
                <h1>Zia Ullah Khan</h1>
                <p>Founder and CEO panacloud</p>
                <div className="spans d-flex justify-content-center align-items-center">
                <div>
                <ul>
                  <li> <div className="span span1"></div></li>
                  <li> <div className="span span2"></div></li>
                  <li> <div className="span span3"></div></li>
                </ul>
                </div>
              
                </div>
                <br />
               
                <button onClick={() => {this.setState({condition: true})}}>Read more</button>
                
              </div>
            
            </div>
            <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
             <div className="cardBody ">
                <div className="imgHead">
                {/* <center> */}
                   <div className="greenCir"></div>
                   <div className="whiteCir"></div>
                   <div className="imgDiv"></div>

                {/* </center> */}
                </div>
                <h1>Zia Ullah Khan</h1>
                <p>Founder and CEO panacloud</p>
                <div className="spans d-flex justify-content-center align-items-center">
                <div>
                <ul>
                  <li> <div className="span span1"></div></li>
                  <li> <div className="span span2"></div></li>
                  <li> <div className="span span3"></div></li>
                </ul>
                </div>
              
                </div>
                <br />
               
                <button onClick={() => {this.setState({condition: true})}}>Read more</button>
                
              </div>
            
            </div>
            
          </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
          <br />
          <br />
        
        <StrategicPartners />
        </div>
         );
    }
}
 
// export default withRouter(ManagementCommittee);
export default ManagementCommittee;