const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

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
};
