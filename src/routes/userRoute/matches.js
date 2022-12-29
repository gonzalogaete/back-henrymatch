const { Router } = require('express');
const FindMatches = require('../../utils/FindMatches.js');

const router = Router();

router.get('/', (req,res) => {
    const userMatches = FindMatches();
    res.send(userMatches);
})

module.exports = router;