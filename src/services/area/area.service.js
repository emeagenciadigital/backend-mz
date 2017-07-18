// Initializes the `area` service on path `/area`
const createService = require('feathers-mongoose');
const createModel = require('../../models/area.model');
const hooks = require('./area.hooks');
const filters = require('./area.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'area',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/area', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('area');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
