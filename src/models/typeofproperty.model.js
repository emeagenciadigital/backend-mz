// typeofproperty-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const typeofproperty = new mongooseClient.Schema({
    custom: { type: Boolean, required: true, default: false},
    name: { type: String, required: true },
    company_id: { type: String, required: false,default:"null" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('typeofproperty', typeofproperty);
};
