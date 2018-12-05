import React, { Component } from "react";
import "./auth.css";

export default class PhoneNumber extends Component {
  state = {
    number: ""
  };
  
  onSubmit = (ev) => {
    const { number } = this.state;
    console.log("number", number,ev);
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
              placeholder="03XX-XXX-XXXX"
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
