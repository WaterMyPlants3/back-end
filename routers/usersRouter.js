const express = require("express");
const router = express.Router();
const Users = require('../data/helpers/users-model')
const Plants = require('../data/helpers/plants-model')


//locates a user based off of an id, locates plants belonging to this user based on same id. sets results to the user object returned.
router.get('/:id', (req, res)=>{
    const id = req.params.id
    Users.findById(id)
        .then(user => {
            Users.getPlants(id)
                .then(plantList => {
                    if (plantList.length){
                        res.status(200).json({...user[0], plants: plantList})
                    } else {
                        res.status(200).json({...user[0], plants: 'sorry no plants here'})
                    }
                })
                .catch(()=>{
                    res.status(500).json({message: 'Sorry, failed to get your plants'})
                })
        })
        .catch(()=>{
            res.status(500).json({message: 'Sorry, failed to find that user'})
        })
})

router.post('/:id/plants', (req, res)=>{
    const id = req.params.id
    const newPlant = req.body
    Plants.findBySpecies(newPlant.species)
        .then(results =>{
            if(results.length > 0) {
                Users.addPlant(id, results, newPlant)
                    .then(plant => {
                        res.status(201).json({plant})
                    })
                    .catch(()=>{
                        res.status(500).json({message: "sorry, failed to add that plant to your list"})
                    })
            } else {
                console.log('inside the else')
                Plants.add(newPlant.species)
                    console.log('adding fresh plant', newPlant.species)
                    .then(freshlyMade =>{
                        console.log('freshlymade', freshlyMade)
                        console.log('users router id else flag', id)
                        Users.addPlant(id, freshlyMade[0], newPlant)
                            .then(plant => {
                                res.status(201).json({plant})
                            })
                            .catch(()=>{
                                res.status(500).json({message: "sorry, failed to add that plant to your list"})
                         })
                    })
                    .catch(()=>{
                        res.status(500).json({message: 'failed to create that new plant'})
                    })
            }
        })
        .catch(()=>{
            res.status(500).json({message: 'failed to get those plants for you'})
        })
})

router.put('/:id/plants/', (req, res)=>{
    const newPlant = req.body
    Users.updatePlant(newPlant)
        .then(update=>{
            res.status(201).json({update})
        })
        .catch(()=>{
            res.status(500).json({message: 'failed to update'})
        })
})

router.delete('/:id/plants', (req, res)=>{
    Users.removePlant(req.body.id)
        .then((deleted) => {
            res.status(200).json({deleted})
        })
        .catch(()=>{
            res.status(500).json({message: 'failed to delete'})
        })
})


module.exports = router