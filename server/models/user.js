exports = module.exports = function(app, mongoose) {

    'use strict';
    var Schema = mongoose.Schema;
    const UserSchema = new Schema({
      fullName: {
          type: String,
          required: true,
      },
      countryCode: {
          type: String,
          required: true,
      },
      phone: {
          type: String,
          required: true,
      },
      verified: {
          type: Boolean,
          default: false,
      },
      authyId: String,
      email: {
          type: String,
          required: true,
          unique: true,
      },
      password: {
          type: String,
          required: true,
      },
  });
  
    
    app.db.model('User', UserSchema);
  
  }