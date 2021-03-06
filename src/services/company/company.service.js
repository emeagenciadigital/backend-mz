// Initializes the `company` service on path `/company`
const createService = require('feathers-mongoose');
const createModel = require('../../models/company.model');
const hooks = require('./company.hooks');
const filters = require('./company.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'company',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/company', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('company');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
