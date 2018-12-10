exports = module.exports = function (app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    const authTable = new Schema({
        databaseToken: {
            type: String,
            required: true,
        },
        accessToken: {
            type: String,
            required: true,
        },
        facebookId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        }
    });


    app.db.model('authTable', authTable);

}