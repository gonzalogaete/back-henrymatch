const { Router } = require("express");
const user = require("../routes/userRoute/user");
const type = require('./userRoute/type')
const questions = require('./userRoute/questions.js');
const router = Router();

router.use("/user", user);
router.use('/type', type);
router.use('/questions', questions)



module.exports = router;
