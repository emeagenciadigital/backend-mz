const assert = require('assert');
const app = require('../../src/app');

describe('\'area\' service', () => {
  it('registered the service', () => {
    const service = app.service('area');

    assert.ok(service, 'Registered the service');
  });
});
