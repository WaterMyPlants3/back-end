const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRoute = require("../user/userRoute");
const plantRoute = require("../plant/plantRoute");
const authRouter = require('../user/authRouter')
const restricted = require('../middleware/restricted')
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api/auth', authRouter);
server.use("/api/users", restricted, userRoute);
server.use("/api/plants", plantRoute);

server.get("/", (req, res) => {
  res.send("Server is live");
});

module.exports = server;
