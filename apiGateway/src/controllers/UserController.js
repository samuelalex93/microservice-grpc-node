const { UserClient } = require ('../services/serviceProto');

class UserController {
  async show(req, res) {
    const { id } = req.params;

    const response = await UserClient.getUserById({ id });

    return res.json(response);
  }

  async store(req, res) {
    const {email, username, password } = req.body;

    const response = await UserClient.registerUser({
      user: { email, username, password },
    })

    return res.json(response);
  }
}

module.exports = new UserController();