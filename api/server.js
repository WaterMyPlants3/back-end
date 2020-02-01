const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bcryptjs = require("bcryptjs");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server is live");
});

module.exports = server;
