const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRoute = require("../user/userRoute");
const plantRoute = require("../plant/plantRoute");
const authRouter = require("../user/authRouter");
const restricted = require("../middleware/restricted");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/auth", authRouter);
// server.use("/api/users", restricted, userRoute);
server.use("/api/users", userRoute);
server.use("/api/plants", plantRoute);

server.get("/", (req, res) => {
  res.send("Server is live");
});

server.use(function(err, req, res, next) {
  if (err.statusCode === 400) {
    res
      .status(err.statusCode)
      .json({ statusCode: 400, error: "Bad Request", message: err.message });
  } else {
    res.status(500).json({ statusCode: 500, error: "Internal Server Error" });
  }
});
module.exports = server;
