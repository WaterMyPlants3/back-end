const express = require("express");
const router = express.Router();
const userDb = require("./userDb");
const plantDb = require('../plant/plantDb')
const { validateUser } = require("../middleware/validation/userValidation");
const {
  validateUsersPlantsFromUser
} = require("../middleware/validation/usersplantsValidation");

router.get("/", async (req, res) => {
  try {
    const users = await userDb.find();
    res.status(200).json(users);
  } catch {
    next(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await userDb.findById(id);
    res.status(200).json(users);
  } catch {
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

router.put("/:id", validateUser, async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const isUpdated = await userDb.update(id, user);
    res.status(201).json(isUpdated);
  } catch {
    next(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await userDb.remove(id);
    res.sendStatus(204);
  } catch {
    next(err);
  }
});

router.get("/:id/plants", async (req, res) => {
  try {
    const id = req.params.id;
    const plants = await userDb.findPlants(id);
    res.status(200).json(plants);
  } catch {
    next(err);
  }
});

router.post('/adduserplant', (req, res)=>{
  userDb.insertPlant(1,1,1)
    .then( newplant => {
      res.status(201).json(newplant)
    })
    .catch(()=>{
      res.status(500).json({message: 'did not add'})
    })
})

// :id user id
router.post("/:id/plants", (req, res) => {
  const id = req.params.id
  const newPlant = req.body
  //gets any plants from plant table with specified species name
  plantDb.findBySpecies(newPlant.species)
    .then(results => {
      //checks if the results of that query has any results
      //if it's true it adds plant to user's list of plants
      if(results.length > 0) {
        userDb.insertPlant(id, results[0].id, req.body)
          .then(newPlant => {
            res.status(201).json(newPlant);
          })
          .catch(()=>{
            res.status(500).json({message: 'error inserting new plant'})
          })
      //if false is returned we will create that new plant and add it
      } else {
        plantDb.create(req.body.species)
          .then(createdPlant => {
            userDb.insertPlant(id, createdPlant[0], req.body)
              .then(addCreated=>{
                res.status(201).json(addCreated)
              })
              .catch(()=>{
                res.status(500).json({message: 'failed to add your newly created plant'})
              })
          })
          .catch(()=>{
            res.status(500).json({message: 'failed to create plant'})
          })
      }
    })
    .catch((err)=>{
      res.status(500).json({message: 'failed to get those plants for you'})
    })
});



// :id users_plants id
router.put("/:id/plants", validateUsersPlantsFromUser, async (req, res) => {
  try {
    const id = req.params.id;
    const isUpdated = await userDb.updatePlant(id, req.body);
    res.status(200).json(isUpdated);
  } catch {
    next(err);
  }
});

// :id users_plants id
router.delete("/:id/plants", async (req, res) => {
  try {
    const id = req.params.id;
    const isDeleted = await userDb.removePlant(id);
    res.status(200).json(isDeleted);
  } catch {
    next(err);
  }
});

module.exports = router;
