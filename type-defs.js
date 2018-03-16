'use strict';

/**
 * @typedef {Object} RedisClientOptions - constructor options to use to construct a new RedisClient instance
 * @property {string|undefined} [host] - an optional host to use (defaults to 127.0.0.1 if unspecified)
 * @property {number|string|undefined} [port] - an optional port to use (defaults to 6379 if unspecified)
 */

/**
 * @typedef {Object} Redis - a Redis adapter instance
 * @property {function(redisClientOptions: RedisClientOptions): RedisClient} createClient - a factory function to be
 *           used to create a RedisClient instance
 * @property {function(fnName: string): Function} getClientFunction - returns the named client function
 * @property {function(fnName: string, fn: Function)} setClientFunction - installs the named client function and sets it
 *           to the given function
 * @property {function(fnName: string): Function} deleteClientFunction - deletes the named client function
 * @property {function(err: Error): boolean} isMovedError - whether the given error indicates that a previously
 *           requested key has been moved or not
 * @property {function(err: Error): [string, number|string]} resolveHostAndPortFromMovedError - resolves the new host &
 *           port from the given moved error (precondition: isMovedErr(err) is true)
 */

/**
 * @typedef {Object} RedisClient - a redis client instance
 * @property {function(): Redis} getAdapter - returns the adapter that created this client
 * @property {function(): boolean} isClosing - whether the client is closing/closed or not
 * @property {function(onConnect: function(), onReady: function(), onReconnecting: function(),
 *           onError: function(err: Error), onClientError: function(err: Error), onEnd: function())} addEventListeners -
 *           registers the given event listeners on this client
 * @property {function(): RedisClientOptions} getOptions - returns this client's current options
 * @property {function(): [string, number|string]} resolveHostAndPort - returns this client's host and port
 * @property {function(fnName: string): Function} getFunction - returns the named function of this client
 * @property {function(fnName: string, fn: Function)} setFunction - installs the named function onto this client and
 *           sets it to the given function
 * @property {function(fnName: string): Function} deleteFunction - deletes the named function from this client
 *
 * @property {function(key: string, callback: Function): *} get - gets the value for the given key
 * @property {function(key: string): Promise.<*>} [getAsync] - gets the value for the given key
 *
 * @property {function(key: string, value: *, [x]: ('EX'|'NX'|'XX'), [ttl]: number, [callback]: Function): *} set - sets
 *           the value for the given key to the given value
 * @property {function(key: string, value: *, [x]: ('EX'|'NX'|'XX'), [ttl]: number): Promise.<*>} [setAsync] - sets the
 *           value for the given key to the given value
 *
 * @property {function(key: string, callback: Function): *} del - deletes the value for the given key
 * @property {function(key: string): Promise.<*>} [delAsync] - deletes the value for the given key
 *
 * @property {function(pong: string, callback: Function): *} ping - pings the server
 * @property {function(pong: string): Promise.<*>} [pingAsync] - pings the server
 *
 * @property {function(flush: boolean, callback: Function): *} end - disconnects the client (after flushing, if true)
 * @property {function(flush: boolean): Promise.<*>} [endAsync] - disconnects the client (after flushing, if true)
 */

/**
 * @typedef {Object} RedisAware - an object configured with a Redis adapter to use
 * @property {Redis|undefined} [redis] - an optional Redis adapter to use
 */

/**
 * @typedef {RedisAware} RedisClientAware - an object configured with a RedisClient instance to use
 * @property {RedisClient} redisClient - a previously or newly cached, but "raw" (i.e. UNTESTED) RedisClient instance
 * @property {Promise.<RedisClient>} [redisClientPromise] - an optional promise of an asynchronously tested and usable
 *           RedisClient instance (if redisClient is usable) or a brand new replacement (if redisClient is
 *           unusable)
 */