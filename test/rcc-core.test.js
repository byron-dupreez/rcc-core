'use strict';

const test = require('tape');

const subject = require('../rcc-core');

test('Check constants', t => {
  t.equal(subject.DEFAULT_REDIS_HOST, '127.0.0.1', `DEFAULT_REDIS_HOST must be '127.0.0.1'`);
  t.equal(subject.DEFAULT_REDIS_PORT, 6379, `DEFAULT_REDIS_PORT must be 6379`);
  t.equal(subject.ONLY_IF_EXISTS, 'XX', `ONLY_IF_EXISTS must be 'XX'`);
  t.equal(subject.ONLY_IF_NOT_EXISTS, 'NX', `ONLY_IF_NOT_EXISTS must be 'NX'`);
  t.equal(subject.TTL_SECS, 'EX', `TTL_SECS must be 'EX'`);
  t.equal(subject.TTL_MS, 'PX', `TTL_MS must be 'PX'`);

  t.end();
});
