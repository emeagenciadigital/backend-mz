// images-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const images = new mongooseClient.Schema({
    property_id: { type: String, required: true },
    position: { type: Number, required: false, default:0 },
    cover: { type: Boolean, required: true, default:false },
    path:{ type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('images', images);
};
