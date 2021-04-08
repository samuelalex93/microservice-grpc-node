const { UserClient } = require('../services/serviceProto');

module.exports = async (req, res, next) => {
  try {
    const response = await UserClient.authenticate({
      token:req.headers.authorization,
    });

    if (response.error) throw new Error(response.error);

    req.userId = response.user.id;

    next();
  } catch ({ message }) {
    return res.status(401).json({error: message });
  }
}