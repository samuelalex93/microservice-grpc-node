const load = require('../pb/loader');

const UserClient = load({
  serviceName: 'UserService',
  address: 'localhost:3334',
  fileName: 'user',
})

const PurchaseClient = load({
  serviceName: 'PurchaseService',
  address: 'localhost:3335',
  fileName: 'purchase',
})

module.exports = {UserClient, PurchaseClient};

