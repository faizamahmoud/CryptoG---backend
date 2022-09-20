// todo: Need API data  1. market route  2. trade route  3. user and coins association

const express = require('express')
const router = express.Router()

const { handleValidateOwnership, requireToken } = require("../middleware/auth"); // ! for create route? 
const {Coin} = require('../models')


//coins/markets
// verify frontend route - where to send this data
// ties user to their purchased coins
// market route
router.get("/markets", async (req, res) => {
	try {
    res.json(await Coin.find({}))
    
		// res.json(await Coin.find({}).populate("owner").exec()); //modify populate parameters 
	} catch (error) {
		res.status(400).json(error);
	}
});

// verify route 
router.get("/:coinID", async (req, res) => {
    try {
        res.json(await Coin.findById(req.params.id)); 
      } catch (error) {
        res.status(400).json(error);
      }
});



module.exports = router;










// // SPECIES SHOW ROUTE
// // you dont need a show route on the backend because it will be on the front end
// // http://localhost:4040/invasiveSpecies/:id


// // Species UPDATE ROUTE

// router.put("/:id", async (req, res) => {
// 	try {
// 	  // update Specie by ID
// 	  res.json(
// 		await Species.findByIdAndUpdate(req.params.id, req.body, {new:true}) // (what do i want to update, what I want to update it to)
// 	  );
// 	} catch (error) {
// 	  //send error
// 	  res.status(400).json(error);
// 	}
//   });
  
