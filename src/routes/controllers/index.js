const { User } = require("../../db/db");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json({
        data: users,
        status: users.length ? "USERS_FOUND" : "USERS_EMPTY",
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        code: error.code,
        message: error.message,
      });
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
      res.status(201).json({
        data: user,
        status: created ? "USER_CREATED" : "USER_EXIST",
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        code: error.code,
        message: error.message,
      });
    }
  },
  searchUser: async (req, res) => {
    try {
      const { nickname } = req.user;
      let user = await User.findOne({ where: { nickname } });
      res.status(202).json({
        data: user ? user : {},
        status: user ? "USER_FOUND" : "USER_NOT_FOUND",
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        code: error.code,
        message: error.message,
      });
    }
  },
  searchUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      res.status(202).json({
        data: user ? user : {},
        status: user ? "USER_FOUND_BY_ID" : "USER_NOT_FOUND_BY_ID",
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        code: error.code,
        message: error.message,
      });
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
      const user = await User.findOne({ where: { nickname } });
      await user.update(data);
      res.json({
        data: user,
        status: "USER_UPDATED",
      });
    } catch (error) {
      console.log(error);
      res.status(404).send({
        code: error.code,
        message: error.message,
      });
    }
  },
};
