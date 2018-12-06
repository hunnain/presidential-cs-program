import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router";
import './ManagementCommittee.css';



class ManagementCommittee extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container App mcCont">
          <div className="row">
            <div className="col-12 border d-flex justify-content-center align-items-center">
              <div>
                <div className="imgHead">
                <center>
                   <div className="greenCir"></div>
                   <div className="whiteCir"></div>
                   <div className="imgDiv"></div>

                </center>
                </div>
                <h1>Zia Ullah Khan</h1>
                <p>Founder and CEO panacloud</p>
                <span></span>
                <span></span>
                <span></span>
                <button>Read more</button>
                
              </div>
            </div>
            <div className="col-3 border d-flex justify-content-center align-items-center">
              <div>
                muneeb
              </div>
            </div>
            <div className="col-3 border d-flex justify-content-center align-items-center">
              <div>
                muneeb
              </div>
            </div>
            <div className="col-3 border d-flex justify-content-center align-items-center">
              <div>
                muneeb
              </div>
            </div>
            <div className="col-3 border d-flex justify-content-center align-items-center">
              <div>
                muneeb
              </div>
            </div>
            <div className="col-3 border d-flex justify-content-center align-items-center">
              <div>
                muneeb
              </div>
            </div>
            <div className="col-3 border d-flex justify-content-center align-items-center">
              <div>
                muneeb
              </div>
            </div>
          </div>
        </div>
         );
    }
}
 
// export default withRouter(ManagementCommittee);
export default ManagementCommittee;