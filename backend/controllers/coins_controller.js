const express = require('express')
const router = express.Router()

const {Coin} = require('../models')




// testing GET
//localhost:4040/coins
router.get("/", async (req, res) => { 
    //if its a 200 status, then send the message
	res.status(200).json({message:"coins home route"})
});

// testing POST
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "coins posted"})
});

module.exports = router;









// // display all data 
// // SPECIES INDEX ROUTE
// router.get("/", async (req, res) => {
// 	try {
//     // get all people
//     res.status(200).json(await Species.find({}));
//   } catch (error) {
//     //send error
// }
//     res.status(400).json(error);
// });


// // SPECIES CREATE ROUTE
// // http://localhost:4040/invasiveSpecies
// router.post("/", async (req, res) => {
// 	try {
// 	  // create new person
// 	  res.status(201).json(await Species.create(req.body));
// 	} catch (error) {
// 	  //send error
// 	  res.status(400).json(error);
// 	}
//   });

// // SPECIES SHOW ROUTE
// // you dont need a show route on the backend because it will be on the front end
// // http://localhost:4040/invasiveSpecies/:id
// router.get("/:id", async (req, res) => {
//     try {
//         // send one Specie
//         res.json(await Species.findById(req.params.id));
//       } catch (error) {
//         //send error
//         res.status(400).json(error);
//       }
// });


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
  
//   // PEOPLE DELETE ROUTE
//   router.delete("/:id", async (req, res) => {
// 	try {
// 	  // delete Specie by ID
// 	  res.json(await Species.findByIdAndRemove(req.params.id));
// 	} catch (error) {
// 	  //send error
// 	  res.status(400).json(error);
// 	}
//   });
  


