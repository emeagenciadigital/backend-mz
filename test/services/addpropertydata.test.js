const assert = require('assert');
const app = require('../../src/app');

describe('\'addpropertydata\' service', () => {
  it('registered the service', () => {
    const service = app.service('addpropertydata');

    assert.ok(service, 'Registered the service');
  });
});
