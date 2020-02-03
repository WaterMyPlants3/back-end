const express = require("express");
const router = express.Router();
const plantDb = require("./plantDb");
const { validatePlant } = require("../middleware/validation/plantValidation");
const {
  validateUsersPlantsFromPlant
} = require("../middleware/validation/usersplantsValidation");

router.get("/", async (req, res) => {
  try {
    const plants = await plantDb.find();
    res.status(200).json(plants);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const plants = await plantDb.findById(id);
    res.status(200).json(plants);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", validatePlant, async (req, res) => {
  try {
    const plant = req.body;
    const isCreated = await plantDb.create(plant);
    res.status(201).json(isCreated);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const plant = req.body;
    const isUpdated = await plantDb.update(id, plant);
    res.status(201).json(isUpdated);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await plantDb.remove(id);
    res.sendStatus(204);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id/users", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await plantDb.findUsers(id);
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// :id plant id
router.post("/:id/users", validateUsersPlantsFromPlant, async (req, res) => {
  try {
    const id = req.params.id;
    const isCreated = await plantDb.insertUser(id, req.body);
    res.status(201).json(isCreated);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// :id users_plants id
router.delete("/:id/users", async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await plantDb.removeUser(id);
    res.status(200).json(isDeleted);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
