// Initializes the `cities` service on path `/cities`
const createService = require('feathers-mongoose');
const createModel = require('../../models/cities.model');
const hooks = require('./cities.hooks');
const filters = require('./cities.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'cities',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/cities', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('cities');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
