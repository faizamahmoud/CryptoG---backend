const mongoose = require('mongoose');
const {MONGODB_URI} = process.env


console.log("Connected to: "+ MONGODB_URI)

mongoose.connect(MONGODB_URI) //! what is this message supposed to be 


mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));