// Initializes the `typeofproperty` service on path `/typeofproperty`
const createService = require('feathers-mongoose');
const createModel = require('../../models/typeofproperty.model');
const hooks = require('./typeofproperty.hooks');
const filters = require('./typeofproperty.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'typeofproperty',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/typeofproperty', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('typeofproperty');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
