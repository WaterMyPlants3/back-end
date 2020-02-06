const express = require("express");
const router = express.Router();
const userDb = require("./userDb");
const { validateUser } = require("../middleware/validation/userValidation");
const {
  validateUsersPlantsFromUser
} = require("../middleware/validation/usersplantsValidation");

router.get("/", async (req, res, next) => {
  try {
    const users = await userDb.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const users = await userDb.findById(id);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateUser, async (req, res, next) => {
  try {
    const user = req.body;
    const isCreated = await userDb.create(user);
    res.status(201).json(isCreated);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", validateUser, async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const isUpdated = await userDb.update(id, user);
    res.status(201).json(isUpdated);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const isDeleted = await userDb.remove(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/plants", async (req, res, next) => {
  try {
    const id = req.params.id;
    const plants = await userDb.findPlants(id);
    res.status(200).json(plants);
  } catch (err) {
    next(err);
  }
});

// :id user id
router.post(
  "/:id/plants",
  validateUsersPlantsFromUser,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const isCreated = await userDb.insertPlant(id, req.body);
      res.status(201).json(isCreated);
    } catch (err) {
      next(err);
    }
  }
);

// :id users_plants id
router.put(
  "/:id/plants",
  validateUsersPlantsFromUser,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const isUpdated = await userDb.updatePlant(id, req.body);
      res.status(200).json(isUpdated);
    } catch (err) {
      next(err);
    }
  }
);

// :id users_plants id
router.delete("/:id/plants", async (req, res, next) => {
  try {
    const id = req.params.id;
    const isDeleted = await userDb.removePlant(id);
    res.status(200).json(isDeleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
