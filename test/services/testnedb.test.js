const assert = require('assert');
const app = require('../../src/app');

describe('\'testnedb\' service', () => {
  it('registered the service', () => {
    const service = app.service('testnedb');

    assert.ok(service, 'Registered the service');
  });
});
