const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const { User } = require("../../db/db");

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
      let data = { name, nickname, picture, email };
      if (firstname) {
        data = { ...data, firstname };
      } else {
        data = { ...data, firstname: nickname, name: nickname };
      }
      if (lastname) {
        data = { ...data, lastname };
      }
      const [user, created] = await User.findOrCreate({
        where: data,
      });
      console.log(
        "el usuario fue creado?:",
        created ? "sí" : "no, ya existe en la base de datos"
      );
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
      const { country, state, linkedIn, gitHub, portfolio, description } =
        req.body;
      let data = {};
      if (country) {
        data = { ...data, country };
      }
      if (state) {
        data = { ...data, state };
      }
      if (linkedIn) {
        data = { ...data, linkedIn };
      }
      if (gitHub) {
        data = { ...data, gitHub };
      }
      if (portfolio) {
        data = { ...data, portfolio };
      }
      if (description) {
        data = { ...data, description };
      }
      console.log(data);
      const user = await User.findOne({ where: { nickname } });
      await user.update(data);
      res.json({
        message: `Los datos fueron actualizados.`,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
