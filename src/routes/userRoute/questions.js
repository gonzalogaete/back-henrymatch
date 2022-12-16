const { Router } = require('express');
const { Question } = require('../../db/db.js')
const router = Router();

router.get('/', async(req,res) => {
    try {
        const allQuestions = await Question.findAll()
        res.status(200).send(allQuestions);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;
