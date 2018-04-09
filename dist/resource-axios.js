'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

/**
 * create vue-resource's resource like object
 *
 * Default Actions
 *   get: {method: 'GET'}
 *   save: {method: 'POST'}
 *   query: {method: 'GET'}
 *   update: {method: 'PUT'}
 *   delete: {method: 'DELETE'}
 *
 * @param path the resource path
 * @param actions custom actions
 * @returns the resource object
 */
var resourceAxios = (path, actions) => {
	let obj = {
		get: id => axios.get(path + '/' + id),
		save: obj => axios.post(path, obj),
		query: params => axios.get(path, { params }),
		update: (id, obj) => axios.put(path + '/' + id, obj),
		delete: id => axios.delete(path + '/' + id)
	};
	return Object.assign(obj, actions)
}
//
// module.exports = axios;
//
// // Allow use of default import syntax in TypeScript
// module.exports.default = axios;

module.exports = resourceAxios;
