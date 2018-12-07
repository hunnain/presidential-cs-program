import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countdown from '../Countdown/Countdown';
import './SupportingPartners.css';
import psxLogo from '../../../assets/psxLogo.png';
import psx2Logo from '../../../assets/psx2.png';
import panacloudLogo from '../../../assets/panacloudLogo.svg';
import iqraLogo from '../../../assets/iqraLogo2.jpeg';
import saylaniLogo from '../../../assets/saylaniLogo.png';
// import saylaniLogo from '../../../assets/';

class SupportingPartners extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="supportingBg">
            <div className="container App supportingCont">
            <div className="row">
                <div className="col-12 mt-2 d-flex justify-content-center align-items-center">
                    <p>SUPPORTING PARTNERS</p>
                </div>
                <div className="col-12 mt-4 mb-4 supporterIcons d-flex justify-content-center align-items-center">
                <div className="">
                <ul>
                        <li><img src={iqraLogo} className="SIimg1" /></li>
                        <li><img src={panacloudLogo} /></li>
                        <li><img src={psx2Logo} /></li>
                        <li><img src={saylaniLogo} /></li>
                    </ul>
                </div>
                </div>
            </div>
             </div>
             </div>
         );
    }
}
 
export default SupportingPartners;