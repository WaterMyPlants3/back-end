const express = require("express");
const router = express.Router();
const plantDb = require("./plantDb");
const { validatePlant } = require("../middleware/validation/plantValidation");
const {
  validateUsersPlantsFromPlant
} = require("../middleware/validation/usersplantsValidation");

const restricted = require("../middleware/restricted");

router.get("/", async (req, res) => {
  try {
    const plants = await plantDb.find();
    res.status(200).json(plants);
  } catch {
    next(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const plants = await plantDb.findById(id);
    res.status(200).json(plants);
  } catch {
    next(err);
  }
});

router.post("/", validatePlant, async (req, res) => {
  try {
    const plant = req.body;
    const isCreated = await plantDb.create(plant);
    res.status(201).json(isCreated);
  } catch {
    next(err);
  }
});

router.put("/:id", validatePlant, async (req, res) => {
  try {
    const id = req.params.id;
    const plant = req.body;
    const isUpdated = await plantDb.update(id, plant);
    res.status(201).json(isUpdated);
  } catch {
    next(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await plantDb.remove(id);
    res.sendStatus(204);
  } catch {
    next(err);
  }
});

router.get("/:id/users", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await plantDb.findUsers(id);
    res.status(200).json(users);
  } catch {
    next(err);
  }
});

// :id plant id
router.post(
  "/:id/users",
  validateUsersPlantsFromPlant,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const isCreated = await plantDb.insertUser(id, req.body);
      res.status(201).json(isCreated);
    } catch (err) {
      next(err);
    }
  }
);

// :id users_plants id
router.delete("/:id/users", async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await plantDb.removeUser(id);
    res.status(200).json(isDeleted);
  } catch {
    next(err);
  }
});

module.exports = router;
