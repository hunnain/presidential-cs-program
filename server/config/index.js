exports = module.exports = function(app) {

    // Use for development
    app.set("mongodb-url",'"mongodb://localhost:27017/PIAIC');

    //cloudinary Stroage Credentials  
    app.set("cloud_name",'Your Clou name');
    app.set("api_key",'Your Cloud Api Key');
    app.set("api_secret",'Your Secret');

    // Use for production
    //app.set("mongodb-url","mongodb://user:pass@id.mongolab.com:port/database");
    

}