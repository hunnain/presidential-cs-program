import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'



class Copyright extends Component {
    state = {}
    render() {
        return (
            <div className="container" style={{ padding: 0 }}>
                <div className="Rectangle-58 col-md-12">
                    <div id="myForm" style={{ width: '70vw' }}>
                        <h1 className="APPLICATION-FORM" >
                            Contact Us
                        </h1>
                        <div className="row" >
                            <div className="col-md-6 row2mail">
                                <label className="label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col-md-6 row2mail">
                                <label className="label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-md-6 row2mail">
                                <label className="label">Contact #</label>
                                <input type="text" className="form-control" placeholder="03XX-XXXXXXX" />
                            </div>
                            <div className="col-md-6 row2mail">
                                <label className="label">Email Address #</label>
                                <input type="text" className="form-control" placeholder="example@abc.com" />
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-md-12 row2mail">
                                <label className="label">Email Address #</label>
                                <textarea type="text" rows={8} className="form-control textArea" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="row btnRow">
                            <div className="col-md-4">
                                <button className=" btn Rectangle-112 col-md-12" >
                                    Contact Us
                            </button>
                            </div>
                        </div>

                        {/* <div className="col-md-12" style={{border:1, borderStyle:'solid'}}>
                            <label className="label">First Name</label>
                            <input className="form-control col-md-12" />
                            <label className="label">First Name</label>
                            <input className="form-control col-md-12" />
                        </div> */}

                    </div>
                </div>
            </div>
        );
    }
}

export default Copyright;