const server = require("./src/app.js");
const { conn } = require("./src/db/db.js");
// Syncing all the models at once.
const PORT = process.env.PORT || 3001
conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("%s listening at ", PORT); // eslint-disable-line no-console
    });
  })
  .catch((e) => console.error("Unable to connect to the database:", e));
