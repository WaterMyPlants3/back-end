const express = require("express");
const router = express.Router();
const userDb = require("./userDb");

router.get("/", async (req, res) => {
  try {
    const users = await userDb.find();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
