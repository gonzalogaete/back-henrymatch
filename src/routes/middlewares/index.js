const axios = require("axios").default;

module.exports = {
  getUser: async (req, res, next) => {
    try {
    // const user = req.auth;
      const accessToken = req.headers.authorization.split(" ")[1];

      const userInfo = (
        await axios.get("https://barv.us.auth0.com/userinfo", {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
      ).data;

      req.user = userInfo;

      next();
    } catch (err) {
        res.status(404).send({
            error: err.code,
            description: err.message,
        })
    }
  },
};
