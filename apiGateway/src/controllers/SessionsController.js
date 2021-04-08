const { UserClient } = require ('../services/serviceProto');


class SessionController {

  async store(req, res) {
    const { email, password } = req.body;
    const response = await UserClient.loginUser({ 
      user: { email, password },
    });

    return res.json(response);
  }
}

module.exports = new SessionController();