import React, { Component } from "react";
import AuthMiddleware from '../../store/middleware/authMiddleware';
import { connect } from 'react-redux';
import "./auth.css";

class ConfirmNumber extends Component {
  state = {
    code: "",
    number: "",
  };

  onConfirm = ev => {
    const { code, number } = this.state;
    console.log("number", code, ev);
    //this.props.verifyCode(this.props.phoneNo,code);
    this.props.verifyCode(number,code);
    //this.props.history.push("/form");
  };

  render() {
    console.log(this.props);
    const { number, code } = this.state;
    return (
      <div className="container-fluid p-0">
        <div className="Rectangle-58">
          <form
            action="JavaScript:void(0)"
            id="myForm"
            ref="myForm"
            onSubmit={ev => this.onConfirm(ev)}
          >
            <h1 className="APPLICATION-FORM ">APPLICATION FORM</h1>
            <label className="label">Your contact number</label>
            <input
              className="form-control Rectangle-59"
              type="number"
              value={number}
              placeholder="03XX-XXX-XXXX"
              onChange={e => {
                this.setState({ number: e.target.value });
              }}
            />
            <a href="#">
              <span className="Didnt-receive-code-Resend-now">
                Not your number?
                <br />
                Change now
              </span>
            </a>
            <br />
            <label className="label">Enter verification code</label>
            <input
              className="form-control Rectangle-59"
              type="number"
              value={code}
              placeholder="Enter verification code"
              onChange={e => {
                this.setState({ code: e.target.value });
              }}
            />
            <a href="#">
              <span className="Didnt-receive-code-Resend-now">
                Didn’t receive code?
                <br />
                Resend now
              </span>
            </a>
            <br />
            
            <button type="submit" className="Rectangle-60">
              VERIFY NOW
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      isLoading: state.authReducer.isLoading,
      isError : state.authReducer.isError,
      errorMessage: state.authReducer.errorMessage,
      phoneNo: state.authReducer.phoneNo,
      token: state.authReducer.token,
      successMessage: state.authReducer.successMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
      verifyCode : (phoneNo,token) => { dispatch(AuthMiddleware.verifyCode({phoneNo:phoneNo,token:token}))}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmNumber);