const { Router } = require("express");
const user = require("../routes/userRoute/user");
const type = require('./userRoute/type')
const questions = require('./userRoute/questions.js');
const matches = require('./userRoute/matches.js');
const router = Router();

router.use("/user", user);
router.use('/type', type);
router.use('/questions', questions)
router.use('/matches', matches)


module.exports = router;
