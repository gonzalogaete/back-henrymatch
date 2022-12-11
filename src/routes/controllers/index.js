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
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
  saveUser: async (req, res) => {
    try {
      const {
        name,
        given_name: firstname,
        family_name: lastname,
        nickname,
        picture,
        email,
      } = req.user;
      const obj = { name, firstname, lastname, nickname, picture, email };
      const [user, created] = await User.findOrCreate({
        where: obj,
      });
      console.log("el usuario fue creado?:", created ? "sí" : "no, ya existe en la base de datos");
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  searchUser: async (req, res) => {
    try {
      const { nickname } = req.user;
      const user = await User.findOne({ where: { nickname } });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const { nickname } = req.user;
      const {linkedIn, gitHub, description} = req.body
      console.log(req.body)
      const user = await User.findOne({ where: { nickname } });
      await user.update(req.body)
      res.json({message: `El usario ${req.user.given_name} fue actualizado.` })
    } catch (error) {
      console.log(error)
    }
  },
};
