exports = module.exports = function (app, mongoose) {

    let express = require('express');
    let router = express.Router();
    let validator = require('validator');
    router.post('/', function (req, res, next) {

        let number = req.body.phoneNumber;
        if (!validator.isNumeric(number)) {
            return res.status(404).send({ message: "Please Provide A Correct Phone Number" })
        }
        const Student = app.db.models.Student;
        Student.findOne({ phoneNumber: number }).then(data => {
            // console.log(data);
            if (data) {
                // console.log(data);
                let id = data._id;
                if (id < 10) {
                    id = data.course + "0000" + id;
                }
                else if (id < 100) {
                    id = data.course + "000" + id;
                }
                else if (id < 1000) {
                    id = data.course + "00" + id;
                }
                else if (id < 10000) {
                    id = data.course + "0" + id;
                }
                let data1 = JSON.parse(JSON.stringify(data));
                data1.roll = id;
                return res.send({ student: data1 })
            }
            else {
                return res.status(404).send({ message: "Not Found" })
            }
        })
    });

    app.use('/admitcard', router);

}

