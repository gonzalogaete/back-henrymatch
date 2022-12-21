const { Question, User } = require("../db/db");
const questionsData = require("../data/questions.json");
const usersData = require("../data/users.json");

function loadDataBase() {
  Question.bulkCreate(questionsData);
  User.bulkCreate(usersData);
  console.log("Questions and Users charged in Database");
}

module.exports = loadDataBase;
