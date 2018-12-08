import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FacebookLogin from 'react-facebook-login';


class FacebookAuth extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const responseFacebook = (response) => {
            console.log(response);
          }
        return(
            <div>
                <FacebookLogin
      appId="228246474738823"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
    //   cssClass="my-facebook-button-class"

    />
            </div>
        )
    }
}
export default FacebookAuth;