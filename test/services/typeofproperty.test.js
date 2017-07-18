const assert = require('assert');
const app = require('../../src/app');

describe('\'typeofproperty\' service', () => {
  it('registered the service', () => {
    const service = app.service('typeofproperty');

    assert.ok(service, 'Registered the service');
  });
});
