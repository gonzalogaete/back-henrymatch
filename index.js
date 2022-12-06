const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env || 3001;
// Syncing all the models at once.

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("%s listening at ", PORT); // eslint-disable-line no-console
    });
  })
  .catch((e) => console.error("Unable to connect to the database:", e));
