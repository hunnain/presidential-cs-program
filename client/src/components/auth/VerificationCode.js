import React, { Component } from "react";
import "./auth.css";

export default class ConfirmNumber extends Component {
  state = {
    code: ""
  };

  onConfirm = ev => {
    const { code } = this.state;
    console.log("number", code, ev);
    this.props.history.push("/form");
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
              value={number}
              placeholder="Enter verification code"
              onChange={e => {
                this.setState({ number: e.target.value });
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
