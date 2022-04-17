'use strict';

/**
 * bit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bit.bit');
