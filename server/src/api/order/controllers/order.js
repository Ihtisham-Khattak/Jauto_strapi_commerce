'use strict';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order');

// 3:51:33