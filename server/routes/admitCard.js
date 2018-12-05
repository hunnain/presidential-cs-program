exports = module.exports = function (app, mongoose) {

    let express = require('express');
    let router = express.Router();
    let validator = require('validator');
    router.post('/', function (req, res, next) {

        let number = req.body.phoneNumber;
        if(!validator.isNumeric(number)){
            return res.status(404).send({ message: "Please Provide A Correct Phone Number" })
        }
        const Student = app.db.models.Student;
        Student.findOne({ phoneNumber: number }).then(data => {
            // console.log(data);
            if (data) {
                return res.send({ student: data })
            }
            else {
                return res.status(404).send({ message: "Not Found" })
            }
        })
    });

    app.use('/admitcard', router);

}

