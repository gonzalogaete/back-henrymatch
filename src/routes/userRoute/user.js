const { Router } = require("express");
const { getUser, getInterest } = require("../middlewares/index");
const { saveUser, getAllUsers, searchUser, updateUser } = require("./../controllers");
const axios = require("axios").default;

const router = Router();

router.get("/get", getAllUsers);

router.get("/search", getUser, searchUser);

router.post("/save", getUser, saveUser);

router.post("/update", getUser, updateUser)

router.get("/interest", getInterest, async (req, res) => {
  res.send(req.interest);
});

module.exports = router;
