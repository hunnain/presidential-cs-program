exports = module.exports = function (app, mongoose) {

    var express = require('express');
    var router = express.Router();
    var axios = require('axios');
    var jwt = require('jsonwebtoken');
    var lodash = require('lodash');

    router.post('/', async function (req, res, next) {
        let { id, accessToken } = req.body;
        axios.get(`https://graph.facebook.com/${id}?fields=id,name,email&access_token=${accessToken}`)
            .then(response => {
                const data = response.data;

                // console.log(data);

                // data.accessToken = accessToken;

                const UserSchema = app.db.models.User;

                UserSchema.findOne({ email: data.email }).then(response => {

                    if (!response) {

                        data.facebookId = id;

                        const User = new UserSchema(data);

                        return User.save()
                            .then(userData => {

                                console.log("new user ==>", userData);

                                let data = JSON.parse(JSON.stringify(userData));

                                data.accessToken = accessToken;

                                data.databaseToken = jwt.sign({ id: data.facebookId }, "Salt");

                                delete data['_id'];

                                // console.log("newUSer==>>", data);


                                const authTable = new app.db.models.authTable(data);

                                return authTable.save()
                                    .then(data => {

                                        console.log(data);

                                        return res.status(200).send(data);

                                    }).catch(err => {

                                        return console.log("token err ==>", err)
                                    });

                            }).catch(err => {
                                // console.log(err);
                                return res.status(400).send(err);

                            })
                    }

                    let userData = JSON.parse(JSON.stringify(response));

                    userData.accessToken = accessToken;

                    console.log("old user ==>>", userData)

                    return res.status(200).send(userData);
                })

            })
            .catch(err => {

                return res.status(400).send(err.response.data.error);

            })

    });

    app.use('/facebookauth', router);

}

