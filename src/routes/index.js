const { Router } = require("express");
const user = require("../routes/userRoute/user");
const type = require('./userRoute/type')
const router = Router();

router.use("/user", user);
router.use('/type', type)



module.exports = router;
