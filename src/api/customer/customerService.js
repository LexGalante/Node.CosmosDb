const Customer = require('./customer');

Customer.methods(['get', 'post', 'put', 'delete']);
Customer.updateOption({
    new: true,
    runValidators: true
});

module.exports = Customer;