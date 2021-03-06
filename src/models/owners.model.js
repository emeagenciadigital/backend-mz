// owners-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
require('mongoose-type-email');
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const owners = new mongooseClient.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: mongooseClient.SchemaTypes.Email, required: true },
    phone: {
      type: Number,
      required: true,
      },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('owners', owners);
};
