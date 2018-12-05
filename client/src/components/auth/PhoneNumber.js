import React, { Component } from "react";
import AuthMiddleware from '../../store/middleware/authMiddleware';
import { connect } from 'react-redux';
import "./auth.css";


class PhoneNumber extends Component {
  state = {
    number: ""
  };
  
  onSubmit = (ev) => {
    const { number } = this.state;
    console.log("number", number,ev);
    this.props.sendPhoneNo(number);
    this.props.history.push("/verification")
  };

  render() {
    console.log(this.props);
    const { number } = this.state;
    return (
      <div className="container-fluid p-0">
        <div className="Rectangle-58">
          <form
            action="JavaScript:void(0)"
            id="myForm"
            ref="myForm"
            onSubmit={ev => this.onSubmit(ev)}
          >
            <h1 className="APPLICATION-FORM ">APPLICATION FORM</h1>
            <label className="label">Enter phone number to verify</label>
            <input
              className="form-control Rectangle-59"
              type="number"
              value={number}
              placeholder="3XX-XXX-XXXX"
              onChange={e => {
                this.setState({ number: e.target.value });
              }}
            />
            <button type="submit" className="Rectangle-60">
              SEND VERIFICATION CODE
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
      phoneNo: state.authReducer.phoneNo
  };
}

function mapDispatchToProps(dispatch) {
  return {
      sendPhoneNo : (phoneNo) => { dispatch(AuthMiddleware.sendPhoneNo(phoneNo))}
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneNumber);