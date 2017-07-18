// Initializes the `properties` service on path `/properties`
const createService = require('feathers-mongoose');
const createModel = require('../../models/properties.model');
const hooks = require('./properties.hooks');
const filters = require('./properties.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'properties',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/properties', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('properties');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }

};
