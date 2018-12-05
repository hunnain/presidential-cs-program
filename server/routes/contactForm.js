exports = module.exports = function (app, mongoose) {

    let express = require('express');
    let router = express.Router();
    let validator = require('validator');
    router.post('/', function (req, res, next) {

        console.log(req.body);

        let body = req.body;
        if (!body.firstName) {
            return res.status(400).send({ message: "Please Provide Your First Name" });
        }
        if (!body.lastName) {
            return res.status(400).send({ message: "Please Provide Your Last Name" });
        }
        if (!body.email) {
            return res.status(400).send({ message: "Please Provide Your Email Name" });
        }
        if (!body.phoneNumber) {
            return res.status(400).send({ message: "Please Provide Your Phone Number" });
        }
        if(!validator.isNumeric(body.phoneNumber)){
            return res.status(400).send({ message: "Please Provide a Valid Phone Number" });
        }
        if (!body.description) {
            return res.status(400).send({ message: "Please Provide the description" });
        }

        const contact = new app.db.models.Contact(body);

        contact.save().then(data => {

            return res.status(200).send(data);

        }).catch(err => {

            return res.status(400).send(err);

        })

    });

    app.use('/contactform', router);

}

