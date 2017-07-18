// Initializes the `addpropertydata` service on path `/addpropertydata`
const createService = require('./addpropertydata.class.js');
const hooks = require('./addpropertydata.hooks');
const filters = require('./addpropertydata.filters');







module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');






  const options = {
    name: 'addpropertydata',
    paginate


  };












  // Initialize our service with any options it requires
  app.use('/addpropertydata', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('addpropertydata');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
