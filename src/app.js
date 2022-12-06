const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const { jwtCheck } = require("./routes/controllers/index");

require("./db/db.js");

const server = express();
server.use(cors());

server.name = "API";

server.use(jwtCheck);
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/", routes);

server.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Error catching endware.
server.use((error, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = error.status || 500;
  const message = error.message || "Internal server error";
  res.status(status).send(message);
});

module.exports = server;
