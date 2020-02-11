const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(process.env.DATA_CONNECTION_STRING || 'mongodb://localhost:4343/customers', {
    useNewUrlParser: true
});