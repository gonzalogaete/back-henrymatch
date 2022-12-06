const { Router } = require("express");
const { getUser, getInterest } = require("../middlewares/index");
const axios = require("axios").default;

const router = Router();

router.get("/save", getUser, async (req, res) => {
  res.send(req.user);
});

router.get("/interest", getInterest, async(req,res)=>{
  res.send(req.interest)
})

module.exports = router;
