const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get('/type', async(req,res) => {
    try {
        const dataUsers = await axios("https://api.typeform.com/forms/{form_id}/responses");
        res.json(dataUsers)
    } catch (error) {
        res.status(400).send(error.message)
    }
} )

module.exports = router;
