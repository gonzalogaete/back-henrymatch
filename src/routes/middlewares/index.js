const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const Interest = require("../../db/models/Interest");

const axios = require("axios").default;

module.exports = {
  jwtCheck: jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://barv11.us.auth0.com/.well-known/jwks.json",
    }),
    audience: "http://localhost:3001/barv",
    issuer: "https://barv11.us.auth0.com/",
    algorithms: ["RS256"],
  }).unless({ path: ["/"] }),
  getUser: async (req, res, next) => {
    try {
      const accessToken = req.headers.authorization.split(" ")[1];
      const userInfo = (
        await axios.get("https://barv11.us.auth0.com/userinfo", {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
      ).data;
      req.user = userInfo;
      next();
    } catch (error) {
      res.status(404).send({
        code: error.code,
        message: error.message,
      });
    }
  },
  getInterest: async (req, res, next) => {
    try {
      const interest = await Interest.findAll();
      const allInterest = [...interest];
      if (!name) {
        return allInterest;
      } else {
        return allInterest.filter((p) => p.name.includes(name));
      }
    } catch (error) {
      res.status(404).send({
        code: error.code,
        message: error.message,
      });
    }
  },
};
