const { Router } = require("express");
const { jwtCheck, getUser, getInterest } = require("../middlewares/index");
const {
  saveUser,
  getAllUsers,
  searchUser,
  updateUser,
  searchUserById,
} = require("./../controllers");

const middlewares = [jwtCheck, getUser];

const router = Router();

router.get("/get", getAllUsers);

router.get("/search", middlewares, searchUser);

router.get("/search/:id", searchUserById);

router.post("/save", middlewares, saveUser);

router.post("/update", middlewares, updateUser);

router.get("/interest", getInterest, async (req, res) => {
  res.send(req.interest);
});

module.exports = router;
