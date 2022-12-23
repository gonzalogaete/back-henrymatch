const { Router } = require("express");
const { Question } = require("../../db/db.js");
const router = Router();
const { jwtCheck } = require("../middlewares/index");

router.get("/all", jwtCheck, async (req, res) => {
  try {
    const allQuestions = await Question.findAll();
    res.status(200).send(allQuestions);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
