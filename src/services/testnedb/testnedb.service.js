// Initializes the `testnedb` service on path `/testnedb`
const createService = require('feathers-nedb');
const createModel = require('../../models/testnedb.model');
const hooks = require('./testnedb.hooks');
const filters = require('./testnedb.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'testnedb',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/testnedb', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('testnedb');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
