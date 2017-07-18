// companyusers-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const companyusers = new mongooseClient.Schema({
    user_id: { type: String, required: true },
    company_id: { type: String, required: true },
    profile: { type: String, required: true, default:"admin"},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('companyusers', companyusers);
};
