import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import './ManagementCommittee.css';
import StrategicPartners from './StrategicPartners/StrategicPartners';
import Modal from './Modal/Modal';

import youtubeIcon from '../../assets/youtube-icon.png';
import facebookIcon from '../../assets/fb-logo.png';
import twiterIcon from '../../assets/twitter-icon.png';

import KaziRahatAli from "../../assets/members-committee/KaziRahatAli.png";
import HunaidLakhani from "../../assets/members-committee/HunaidLakhani.jpg";
import ZiaKhan from "../../assets/members-committee/ZiaKhan.jpg";
import SulaimanMehdi from "../../assets/members-committee/SulaimanMehdi.jpeg";

class ManagementCommittee extends Component {
  state = {
    condition: false
  };

  hideModal = () => {
    this.setState({ condition: false });
  };

  render() {
    const { condition } = this.state;
    return (
      <div className="container App mcCont">
        <Modal condition={condition} hideModal={this.hideModal} />
        <div className="row">
          <div className="col-12  d-flex justify-content-center align-items-center">
            <h1 className="mcHeading">Management Committee</h1>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
            <div className="cardBody ">
              <div className="imgHead">
                {/* <center> */}
                <div className="greenCir" />
                <div
                  className="whiteCir"
                  style={{ backgroundImage: `url(${KaziRahatAli})`,backgroundPosition:'top' }}
                />
                <div className="imgDiv" />

                {/* </center> */}
              </div>
              <h1>Kazi Rahat Ali</h1>
              <p>General Secretary</p>
              <div className="spans d-flex justify-content-center align-items-center">
                <div>
                  <ul>
                  <li>
                      {" "}
                      {/* <a href="">
                        <img alt="fb-icon"  className="span" src={facebookIcon} />
                      </a> */}
                    </li>
                    <li>
                      {" "}
                      {/* <a href="">
                        <img alt="twitter-icon" className="span" src={twiterIcon} />
                      </a> */}
                    </li>
                    <li>
                      {" "}
                      {/* <a href="">
                        <img alt="linkedin-icon" className="span" src={youtubeIcon} />
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              {/* <button
                onClick={() => {
                  this.setState({ condition: true });
                }}
              >
                Read more
              </button> */}
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
            <div className="cardBody ">
              <div className="imgHead">
                {/* <center> */}
                <div className="greenCir" />
                <div
                  className="whiteCir"
                  style={{ backgroundImage: `url(${HunaidLakhani})`,backgroundPosition:"top" }}
                />
                <div className="imgDiv" />

                {/* </center> */}
              </div>
              <h1>Hunaid Lakhani</h1>
              <p>Chancellor - Iqra University</p>
              <div className="spans d-flex justify-content-center align-items-center">
                <div>
                  <ul>
                    <li>
                      {" "}
                      <a href="https://www.facebook.com/Hunaid.H.Lakhani/">
                        <img alt="fb-icon" className="span" src={facebookIcon} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://twitter.com/Hunaid_Lakhani">
                        <img alt="twitter-icon" className="span" src={twiterIcon} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://www.linkedin.com/in/hunaid-lakhani-00728014/">
                        <img alt="linkedin-icon" className="span" src={youtubeIcon} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              {/* <button
                onClick={() => {
                  this.setState({ condition: true });
                }}
              >
                Read more
              </button> */}
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
            <div className="cardBody ">
              <div className="imgHead">
                {/* <center> */}
                <div className="greenCir" />
                <div className="whiteCir" />
                <div className="imgDiv" />

                {/* </center> */}
              </div>
              <h1>Yusuf Lakhani</h1>
              <p>President - Saylani Welfare Trust</p>
              <div className="spans d-flex justify-content-center align-items-center">
                <div>
                  <ul>
                    <li>
                      {" "}
                      <a href="https://www.facebook.com/yousuf.lakhani.3994">
                        <img alt="fb-icon"  className="span" src={facebookIcon} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      {/* <a href="">
                        <img alt="twitter-icon" className="span" src={twiterIcon} />
                      </a> */}
                    </li>
                    <li>
                      {" "}
                      {/* <a href="">
                        <img alt="linkedin-icon" className="span" src={youtubeIcon} />
                      </a> */}
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              {/* <button
                onClick={() => {
                  this.setState({ condition: true });
                }}
              >
                Read more
              </button> */}
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
            <div className="cardBody ">
              <div className="imgHead">
                {/* <center> */}
                <div className="greenCir" />
                <div
                  className="whiteCir"
                  style={{ backgroundImage: `url(${ZiaKhan})`,backgroundPosition:'top' }}
                />
                <div className="imgDiv" />

                {/* </center> */}
              </div>
              <h1>Zia Ullah Khan</h1>
              <p>CEO - Panacloud Pvt. Ltd.
                <br/>
                <br/>
              </p>
              <div className="spans d-flex justify-content-center align-items-center">
                <div>
                  <ul>
                    <li>
                      {" "}
                      <a href="https://www.facebook.com/ziakhan">
                        <img alt="fb-icon" className="span" src={facebookIcon} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://twitter.com/ziakhan">
                        <img alt="twitter-icon" className="span" src={twiterIcon} />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://www.linkedin.com/in/ziaukhan/">
                        <img alt="linkedin-icon" className="span" src={youtubeIcon} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              {/* <button
                onClick={() => {
                  this.setState({ condition: true });
                }}
              >
                Read more
              </button> */}
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mt-5 d-flex justify-content-center align-items-center">
            <div className="cardBody ">
              <div className="imgHead">
                {/* <center> */}
                <div className="greenCir" />
                <div
                  className="whiteCir"
                  style={{ backgroundImage: `url(${SulaimanMehdi})` }}
                />
                <div className="imgDiv" />

                {/* </center> */}
              </div>
              <h1>Sulaiman Mehdi</h1>
              <p>Chairman Of The Board - Pakistan Stock Exchange</p>
              <div className="spans d-flex justify-content-center align-items-center">
                <div>
                  <ul>
                    <li>
                      {" "}
                      {/* <a href="">
                        <img alt="fb-icon" className="span" src={facebookIcon} />
                      </a> */}
                    </li>
                    <li>
                      {" "}
                      {/* <a href="">
                        <img alt="twitter-icon" className="span" src={twiterIcon} />
                      </a> */}
                    </li>
                    <li>
                      {" "}
                      <a href="https://www.linkedin.com/in/sulaiman-s-mehdi-fcis-44275773/">
                        <img alt="linkedin-icon" className="span" src={youtubeIcon} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <br />

              {/* <button
                onClick={() => {
                  this.setState({ condition: true });
                }}
              >
                Read more
              </button> */}
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
