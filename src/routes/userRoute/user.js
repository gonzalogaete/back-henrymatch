const { Router } = require("express");
const { getUser, getInterest } = require("../middlewares/index");
const { saveUser, getAllUsers } = require("./../controllers");
const axios = require("axios").default;

const router = Router();

router.get("/users", getAllUsers);

router.get("/save", getUser, saveUser);

router.get("/interest", getInterest, async (req, res) => {
  res.send(req.interest);
});

module.exports = router;
