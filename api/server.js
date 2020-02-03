const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRoute = require("../user/userRoute");
const plantRoute = require("../plant/plantRoute");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/users", userRoute);
server.use("/api/plants", plantRoute);

server.get("/", (req, res) => {
  res.send("Server is live");
});

module.exports = server;
