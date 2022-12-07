const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const { User } = require("../../db/db");

module.exports = {
  jwtCheck: jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://barv.us.auth0.com/.well-known/jwks.json",
    }),
    audience: "this is a unique identifier",
    issuer: "https://barv.us.auth0.com/",
    algorithms: ["RS256"],
  }).unless({ path: ["/"] }),
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users)
    } catch (error) {
      console.log(error)
    }
  },
  saveUser: async (req, res) => {
    try {
      // const {} = req.body
      console.log(req.body);
      const [user, created] = await User.findOrCreate({
        where: { ...req.body },
      });
      res.json(req.user);
    } catch (error) {
      console.log(error);
    }
  },
};
