import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import youtubeIcon from "../../../assets/ytIconColor.svg";
import facebookIcon from "../../../assets/fbIconColor.svg";
import twiterIcon from "../../../assets/tIconColor.svg";
// import twiterIcon from '../../../assets';

class Modal extends Component {
  state = {
    showNOt: this.props.condition
  };

  clickOn = () => {
    var box = document.querySelector(".bg-modal");
    const th = this;
    // Detect all clicks on the document
    document.addEventListener("click", function(event) {
      // If user clicks inside the element, do nothing
      if (event.target.closest(".modal-contents")) return;
      if (event.target.closest(".cardBody button")) return;

      // If user clicks outside the element, hide it!
      // box.classList.add("js-is-hidden");
      console.log("clicked");
      // th.setState({showNOt: false});
      th.props.hideModal();
    });
  };

  render() {
    const { showNOt } = this.state;
    const { condition } = this.props;
    return (
      <div>
        {condition && (
          <div className="bg-modal" onClick={this.clickOn}>
            <div className="modal-contents App">
              <div className="closeBtnBox">
                <div
                  className="close"
                  onClick={() => {
                    this.props.hideModal();
                  }}
                >
                  +
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="cardArea ">
                  <div className="imgHead">
                    {/* <center> */}
                    <div className="greenCir" />
                    <div className="whiteCir2" />
                    <div className="imgDiv" />

                    {/* </center> */}
                  </div>
                  <h1>Zia Ullah Khan</h1>
                  <p>Founder and CEO panacloud</p>
                  <div className="spans d-flex justify-content-center align-items-center">
                    <div>
                      <ul>
                        <li>
                          {" "}
                          <img className="span" src={facebookIcon} />
                        </li>
                        <li>
                          {" "}
                          <img className="span" src={twiterIcon} />
                        </li>
                        <li>
                          {" "}
                          <img className="span" src={youtubeIcon} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modalPCont d-flex justify-content-center align-items-center">
                <p>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. It has survived not only five centuries,
                  but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Why do
                  we use it? It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text,
                  and a search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </p>
              </div>
              <br />

              <button
                className="modalBtn2"
                onClick={() => {
                  this.props.hideModal();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
