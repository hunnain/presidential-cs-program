import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countdown from '../Countdown/Countdown';
import { withRouter } from 'react-router-dom';
import president from '../../../assets/president.png';

import './HomeVideo.css';

class HomeVideo extends Component {
    state = {}
    render() {
        return (
            <div className="sliderImg">
                <div className="container ">
                    <div className="homeVideoCont">
                        <div className="row ">
                            <div className="col-lg-9">
                                <div className="slider-doc-f1 d-flex justify-content-center align-items-center">
                                    <div className="slider-doc-txt">

                                        <h1>Presidential Initiative for Artificial Intelligence &amp; Computing (PIAIC)</h1>
                                        <p>PIAIC is an interdisciplinary hub for mass education, research, and business in artificial intelligence (AI), data science, cloud computing, edge computing, blockchain and internet of things (IoT) related fields. As AI and computing reshape our world, PIAIC intends to help make sure that Pakistan plays its part in this fourth industrial revolution. PIAIC aims is to transform education, research and business in Pakistan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <div className="cardArea ">
                <div className="imgHead imgHead2">
                {/* <center> */}
                   <div className="greenCir"></div>
                   <div className="whiteCir2" style={{backgroundImage: "url("+president+")",backgroundPosition: "top"}}></div>
                   <div className="imgDiv"></div>

                {/* </center> */}
                </div>
                <h1>Dr. Arif Alvi</h1>
                <p>President of Pakistan</p>
                
                
              </div>
                            </div>
                            <div className="col-xl-12 mt-5 mt-xl-0 mb-5 mb-xl-0 d-flex justify-content-center align-items-center">
                            <div className="slider-doc-f2">
                    <div className="video-cont">
                        <Countdown date={`2018-12-11T00:00:00`} /> 
                        <button onClick={() => {this.props.history.push("subscribe")}} className="subscribe mt-5">Subscribe</button>
                        
                        </div>
                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="slider-doc border"> */}

                        {/* <div className="slider-doc-f1">
                <div className="slider-doc-txt">
       
                <h1>Presidential Initiative for Artificial Intelligence &amp; Computing (PIAIC)</h1>
                <p>PIAIC is an interdisciplinary hub for mass education, research, and business in artificial intelligence (AI), data science, cloud computing, edge computing, blockchain and internet of things (IoT) related fields. As AI and computing reshape our world, PIAIC intends to help make sure that Pakistan plays its part in this fourth industrial revolution. PIAIC aims is to transform education, research and business in Pakistan.</p>
                </div>
                </div>
                <div className="slider-doc-f2">
                    <div className="video-cont">
                        <Countdown date={`2018-12-11T00:00:00`} /> 
                        <button onClick={() => {this.props.history.push("subscribe")}} className="subscribe mt-5">Subscribe</button>*/}
                        {
                            /*
                        <iframe className="video"  src="https://www.youtube.com/embed/GMNJAruCO5I"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        */
                        }
                        {/* </div>
                </div>*/}
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default withRouter(HomeVideo);