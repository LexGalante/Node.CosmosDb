const restful = require('node-restful');
const mongoose = require('mongoose');

const customers = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
});

module.exports = restful.model('Customer', customers);