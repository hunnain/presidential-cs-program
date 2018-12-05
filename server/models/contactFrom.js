exports = module.exports = function (app, mongoose) {
    'use strict';

    let validator = require('validator');

    var Schema = mongoose.Schema;

    var ContactFrom = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
            }
        },
        phoneNumber: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            default: Date.now
        }
    });

    app.db.model('Contact', ContactFrom);

}