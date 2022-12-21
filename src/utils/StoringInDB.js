const { Question, User } = require("../db/db");
const questionsData = require("../data/questions.json");
const users = require("../data/users.json");

async function storingInDB() {
  await Question.bulkCreate(questionsData);
  await User.bulkCreate(users);
  console.log("Questions and Users charged in Database");
}

module.exports = storingInDB;
