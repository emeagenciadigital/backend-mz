
// backend/src/models/contact.model.js

require('mongoose-type-email');

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const company = new mongooseClient.Schema({
    name : {
        type: String,
        required: [true, 'First Name is required']
    },
    nit : {
        type: String,
        required: [true, 'First Name is required']
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('company', company);
};
