// properties-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const properties = new mongooseClient.Schema({
    type_id: { type: String, required: true },
    action_id: { type: String, required: true },
    rentprice: { type: Number, required: false },
    saleprice: { type: Number, required: false },
    city_id: { type: String, required: true },
    country_id: { type: String, required: true },
    zone_id: { type: String, required: true },
    area_id: { type: String, required: true },
    address: { type: String, required: false },
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
    area: { type: Number, required: false },
    rooms: { type: Number, required: false },
    bathrooms: { type: Number, required: false },
    serviceroom: { type: Boolean, required: false },
    garage: { type: Number, required: false },
    deposit:{ type: Boolean, required: false },
    pool: { type: Boolean, required: false },
    balcony: { type: Boolean, required: false },
    owner_id: { type: String, required: false, default:"none"},
    image_id: { type: String, required: false, default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8F9ta8zDiObFI4oWBtkXZQTkQqV772_agwOm3SOlpPdPH6Kk"},
    company_id: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('properties', properties);
};
