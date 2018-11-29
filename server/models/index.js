exports = module.exports = function(app, mongoose) {

    require('./user')(app, mongoose);
    require('./student')(app, mongoose);

}
