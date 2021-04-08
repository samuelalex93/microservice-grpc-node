const Purchase = require('./models/Purchase');

module.exports = {
  async getPurchaseById(call, callback) {
    const { id } = call.request;

    const purchase = await Purchase.findById(id);

    if (!purchase) {
      return callback(null, { error: 'Purchase not found' });
    }
    
    return callback(null, { purchase });
  },

  async listPurchases(call, callback) {
    const { userId } = call.request;

    const purchases = await Purchase.find({ userId });

    if (!purchases) {
      return callback(null, { error: 'Purchases not found' });
    }
    
    return callback(null, { purchases });
  },

  async registerPurchase(call, callback) {
    const { title, value, userId } = call.request.purchase;

    const purchase = await Purchase.create({ title, value, userId });

    return callback(null, { purchase: { ...purchase.toObject(), id: purchase._id } });
  },
};