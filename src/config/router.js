const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    const customerService = require('../api/customer/customer.service');
    customerService.register(router, '/customer');
}