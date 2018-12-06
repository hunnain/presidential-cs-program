exports = module.exports = function(app, mongoose) {

    var express = require('express');
    var router = express.Router();

    const Client = require('authy-client').Client;
    const authy = new Client({key: app.get("authy_api_key")});
    const enums = require('authy-client').enums;

    function responseToClient(success, message){
        return {
            success: success,
            message: message
        };
    }
    router.post('/sendphoneno', function(req, res, next) {
        app.logLevel1("In sendverificationcode function ",req.body.phone);
        app.log("length ",req.body.phone.length);

        if(req.body.phone && req.body.phone.length==11) {
            authy.startPhoneVerification({ countryCode: '92', locale: 'en', phone: req.body.phone, via: enums.verificationVia.SMS })
            .then(function (response) {
                app.log("response ",response);
                res.send(responseToClient(true,response.message + " You have "+(Math.round(response.seconds_to_expire/60))+" minute(s) to verify your number"));
            })
            .catch(function (error){
                app.log("error",error);
                res.send(responseToClient(false,"Phone number must be valid. Please try again"));
            })
        }
        else {
            res.send(responseToClient(false,"Invalid input, Phone number must contains 10 digits. Please try again"));
        }        
    });

    router.post('/verifycode', function(req, res, next) {
        app.logLevel1("In verifycode function ",req.body.token);
        if(req.body.phone && req.body.token && req.body.phone.length==11 && req.body.token.length>=4) {
            authy.verifyPhone({ countryCode: '92', phone: req.body.phone, token: req.body.token })
                .then(function (response) {
                    app.log("response ", response);
                    var resToClient = {
                        success: true,
                        message: response.message,
                        authToken: "xyz123"
                    }
                    res.send(resToClient);
                    //res.send(responseToClient(true,response.message));
                })
                .catch(function (error){
                    app.logLevel1("error",error);
                    res.send(responseToClient(false,error.message));
                });
        }
        else {
            res.send(responseToClient(false,"Please provide correct verification code"));
        } 
    });

    app.use('/auth', router);
  
}