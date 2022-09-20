require('dotenv').config()
const mongoose = require('mongoose');
const { Coin } = require('./models')

const axios = require('axios')

const {MONGODB_URI} = process.env

mongoose.connect(MONGODB_URI);

// Connection Events
mongoose.connection
  .on("open", () => console.log("This is my awesome amazing connection man"))
  .on("close", () => console.log("Your are disconnected from mongoose :'("))
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

    } catch(err) {
        console.log(err);
    }
}

seedingData();
