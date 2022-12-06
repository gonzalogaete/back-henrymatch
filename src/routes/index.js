const { Router } = require("express");
const user = require("../routes/userRoute/user");

const router = Router();

router.use("/user", user);

module.exports = router;
