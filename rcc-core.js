'use strict';

exports._$_ = '_$_'; //IDE workaround

exports.DEFAULT_REDIS_HOST = "127.0.0.1"; // ioredis uses the equivalent "localhost" as default host
exports.DEFAULT_REDIS_PORT = 6379;

// Use 'EX' as the key property to specify the time-to-live in seconds on a RedisClient `set` or installed `setAsync`,
// e.g. `redisClient.setAsync(key, value, 'EX', timeToLiveInSecs)`
exports.TTL_SECS = 'EX';

// Use 'PX' as the key property to specify the time-to-live in milliseconds on a RedisClient `set` or installed
// `setAsync`, e.g. `redisClient.setAsync(key, value, 'PX', timeToLiveInMs)`
exports.TTL_MS = 'PX';

exports.ONLY_IF_EXISTS = 'XX';

exports.ONLY_IF_NOT_EXISTS = 'NX';