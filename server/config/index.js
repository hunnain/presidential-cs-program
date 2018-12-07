exports = module.exports = function(app) {

    // Use for development
    //

    // For development config -- STARTS
    //app.set("mongodb-url",'"mongodb://localhost:27017/PIAIC');
    app.set("mongodb-url","mongodb://piaicuser:piaic_1234@ds133152.mlab.com:33152/piaic-dev");
    
    //cloudinary Stroage Credentials  
    app.set("cloud_name",'dgtzrxfyd');
    app.set("api_key",'893115935379578');
    app.set("api_secret",'lWY5FkcFfahA-oaU8KFwD2buQDY');
    app.set("authy_api_key",'7OY1Yp5wcEjkEQfHO1hsAg8nlzx8X3gi');
    app.set("showLogs",true);

    // For development config -- ENDS

    // For production config -- STARTS
    
    // All same for now
    //app.set("mongodb-url","mongodb://piaicuser:piaic_1234@ds133152.mlab.com:33152/piaic-dev"); -- for now same
    //app.set("cloud_name",'dgtzrxfyd');
    //app.set("api_key",'893115935379578');
    //app.set("api_secret",'lWY5FkcFfahA-oaU8KFwD2buQDY');
    //app.set("authy_api_key",'7OY1Yp5wcEjkEQfHO1hsAg8nlzx8X3gi');
    //app.set("showLogs",true);


    // For production config -- ENDS

    // Use for production
    //app.set("mongodb-url","mongodb://user:pass@id.mongolab.com:port/database");
    

}