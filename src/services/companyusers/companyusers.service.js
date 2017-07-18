// Initializes the `companyusers` service on path `/companyusers`
const createService = require('feathers-mongoose');
const createModel = require('../../models/companyusers.model');
const hooks = require('./companyusers.hooks');
const filters = require('./companyusers.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'companyusers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/companyusers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('companyusers');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
