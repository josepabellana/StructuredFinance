require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//openBB

const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_URL = process.env.SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL
const router = require("./router");

const corsConfig = {
    origin: [SERVER_URL || "http://localhost:3001", CLIENT_URL || "http://localhost:3000"],
    credentials: true,
};
app.use(cors(corsConfig));
app.use(router);
app.use(express.json());

const server = app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`Sorry, something went wrong! ${err}`);
  } else {
    console.log(`Server is listening on port ${SERVER_PORT}!`);
  }
});

module.exports = server;
