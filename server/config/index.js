exports = module.exports = function(app) {

    // Use for development
    app.set("mongodb-url",'"mongodb://localhost:27017/PIAIC');

    //cloudinary Stroage Credentials  
    app.set("cloud_name",'dgtzrxfyd');
    app.set("api_key",'893115935379578');
    app.set("api_secret",'lWY5FkcFfahA-oaU8KFwD2buQDY');

    // Use for production
    //app.set("mongodb-url","mongodb://user:pass@id.mongolab.com:port/database");
    

}