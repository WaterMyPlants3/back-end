const express = require("express");
const router = express.Router();
const plantDb = require("./plantDb");

router.get("/", async (req, res) => {
  try {
    const plants = await plantDb.find();
    res.status(200).json(plants);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
