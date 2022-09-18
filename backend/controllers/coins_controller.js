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