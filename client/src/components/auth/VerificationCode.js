import React, { Component } from "react";
import AuthMiddleware from "../../store/middleware/authMiddleware";
import { connect } from "react-redux";
import "./auth.css";

class ConfirmNumber extends Component {
  state = {
    code: "",
    number: ""
  };

  onConfirm = () => {
    const { code, number } = this.state;
    console.log(number, code);
    //this.props.verifyCode(this.props.phoneNo,code);
    this.props.verifyCode(number, code);
  };

  // reSendCode = () => {
  //   const { number } = this.state;
  //   this.props.sendPhoneNo(number);
  // };

  componentWillReceiveProps(nextProps) {
    if (nextProps.successMessage) {
      this.props.history.push("/form");
    }
  }

  componentDidMount() {
    const { phoneNo } = this.props.location.state;
    this.setState({ number: phoneNo });
  }

  render() {
    console.log(this.props);
    const { number, code } = this.state;
    const { isLoading, isError, errorMessage } = this.props;
    return (
      <div>
        {isLoading ? (
          <div className="LoaderContainer">
            <div className="loader">
              <div className="lds-ring">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="container-fluid p-0">
          <div className="Rectangle-588">
            <div id="myForm1">
              <h1 className="APPLICATION-FORM ">APPLICATION FORM</h1>
              <label className="label">Your contact number</label>
              <input className="form-control Rectangle-599" value={number} />
              <a href="/apply">
                <span className="Didnt-receive-code-Resend-now">
                  Not your number?
                  <br />
                  Change now
                </span>
              </a>
              <br />
              <label className="label">Enter verification code</label>
              <input
                className={`form-control Rectangle-599 ${
                  isError ? "errorElem" : ""
                }`}
                type="number"
                value={code}
                placeholder="Enter verification code"
                onChange={e => {
                  this.setState({ code: e.target.value });
                }}
              />
              <a href="javascript:void(0)" 
                // onClick={this.reSendCode}
              >
                <span className="Didnt-receive-code-Resend-now">
                  Didn’t receive code?
                  <br />
                  Resend now
                </span>
              </a>
              <br />
              <p className="error">{isError ? errorMessage : ""}</p>
              <button onClick={this.onConfirm} className="Rectangle-606">
                VERIFY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.authReducer.isLoading,
    isError: state.authReducer.isError,
    errorMessage: state.authReducer.errorMessage,
    phoneNo: state.authReducer.phoneNo,
    token: state.authReducer.token,
    // authToken: state.authReducer.authToken,
    successMessage: state.authReducer.successMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    verifyCode: (phoneNo, token) => {
      dispatch(AuthMiddleware.verifyCode({ phoneNo: phoneNo, token: token }));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmNumber);
