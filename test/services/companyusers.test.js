const assert = require('assert');
const app = require('../../src/app');

describe('\'companyusers\' service', () => {
  it('registered the service', () => {
    const service = app.service('companyusers');

    assert.ok(service, 'Registered the service');
  });
});
