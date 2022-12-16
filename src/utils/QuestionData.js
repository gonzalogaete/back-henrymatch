const { Question } = require('../db/db');
const questionsData = require('../data/questions.json');

function dbQuestions(){
    Question.bulkCreate(questionsData)
    console.log('Questions charged in Database')
}

module.exports = { dbQuestions }