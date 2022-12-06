const { Router } = require("express");
const { getUser } = require("../middlewares/index");
const axios = require("axios").default;

const router = Router();

router.get("/save", getUser, async (req, res) => {
  res.send(req.user);
});

module.exports = router;
