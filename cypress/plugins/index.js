/* global module require */

const { queue, flush } = require('../../vendor/cy-axe-report');

module.exports = function (on) {
	on('task', queue);
	on('after:run', flush);
};
