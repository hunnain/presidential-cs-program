import React, { Component } from "react";
import AuthMiddleware from "../../store/middleware/authMiddleware";
import { connect } from "react-redux";
import "./auth.css";

class PhoneNumber extends Component {
  state = {
    number: ""
  };

  onSubmit = () => {
    const { number } = this.state;
    this.props.sendPhoneNo(number);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.successMessage) {
      this.props.history.push("/verification", { phoneNo: this.state.number });
    }
  }

  render() {
    const { isLoading, isError, errorMessage } = this.props;
    const { number } = this.state;
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
            <div id="myForm">
              <h1 className="APPLICATION-FORM">APPLICATION FORM</h1>
              <label className="label06">Enter phone number to verify</label>
              <input
                className={`form-control Rectangle-596 ${
                  isError ? "errorElem" : ""
                }`}
                type="number"
                value={number}
                placeholder="3XX-XXX-XXXX"
                onChange={e => {
                  this.setState({ number: e.target.value });
                }}
              />
              <p className="error">{isError ? errorMessage : ""}</p>
              <button onClick={this.onSubmit} className="Rectangle-606">
                SEND VERIFICATION CODE
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
    successMessage: state.authReducer.successMessage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendPhoneNo: phoneNo => {
      dispatch(AuthMiddleware.sendPhoneNo({ phoneNo: phoneNo }));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneNumber);
