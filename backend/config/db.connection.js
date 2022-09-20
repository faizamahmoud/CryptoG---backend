const mongoose = require('mongoose');
const { Coin } = require('../models')
const axios = require('axios')


const {MONGODB_URI} = process.env


console.log("Connected to: "+ MONGODB_URI) 

mongoose.connect(MONGODB_URI, (msg) =>console.log(`${msg}`)) //! what is this message supposed to be 


mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


  const seedingData = async () => {
    try {
       const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
              'X-CMC_PRO_API_KEY': '43665218-be9b-415f-ba98-b87571fd7356',
            }
        });
// console.log(response.data.data)
const myCoins = response.data.data
// const deletedCoins = await Coin.deleteMany({})
const addedCoins = await Coin.insertMany(myCoins)
console.log(addedCoins)
// console.log(deletedCoins)
        // const jsonCoins = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map');  
        // const allCoins = await jsonCoins.json();  
        // // const deleteCoins = await Coin.deleteMany({})  
        // console.log(allCoins)
        // const addCoins = await Coin.insertMany(allCoins);  
        // // console.log(deleteCoins);
        // console.log(addCoins);
    } catch(err) {
        console.log(err);
    }
}

seedingData();