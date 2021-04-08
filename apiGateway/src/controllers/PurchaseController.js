const { PurchaseClient } = require ('../services/serviceProto');

class PurchaseController {
  async show(req, res) {
    const { id } = req.params;

    const response = await PurchaseClient.getPurchaseById({ id });

    return res.json(response);
  }

  async index(req, res) {

    const response = await PurchaseClient.listPurchases({ userId: req.userId });

    return res.json(response);
  }

  async store(req, res) {
    const { title, value } = req.body;

    const response = await PurchaseClient.registerPurchase({
      purchase: { title, value, userId: req.userId },
    })

    return res.json(response);
  }
}

module.exports = new PurchaseController();