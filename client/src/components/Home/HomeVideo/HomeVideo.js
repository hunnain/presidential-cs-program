import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countdown from '../Countdown/Countdown';


class HomeVideo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="sliderImg">
            <div className="container">
              <div className="slider-doc">
                <div className="slider-doc-f1">
                <div className="slider-doc-txt">
      
                <h1>Presidential Initiative for Artificial Intelligence &amp; Computing (PIAIC)</h1>
                <p>PIAIC is an interdisciplinary hub for mass education, research and business in computing, Artificial Intelligence (AI), data science, cloud computing, edge computing, blockchain and Internet of Things (IoT) related fields. As AI and computing reshapes our world, PIAIC intends to help make sure that Pakistan plays its part in this fourth industrial revolution, it's aim is to transform education, research and work in Pakistan.</p>
                </div>
                </div>
                <div className="slider-doc-f2">
                    <div className="video-cont">
                        <Countdown date={`2018-12-11T00:00:00`} /> 
                    {
                        /*
                    <iframe className="video"  src="https://www.youtube.com/embed/GMNJAruCO5I"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                    */
                        }
                    </div>
                </div>
              </div>
            </div>
             </div>
         );
    }
}
 
export default HomeVideo;