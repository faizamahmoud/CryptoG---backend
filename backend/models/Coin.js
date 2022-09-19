const mongoose = require("mongoose"); // Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. 

// users can buy multiple kinds of coins

const coinSchema = new mongoose.Schema({
    time: {type: Date, default: null},
    asset_id_quote: {type: String, default: null},
    rate: {type: Number, default: null},
    owner: {
        type: mongoose.Schema.Types.ObjectId, //anytime we store a user, it should be set to the objectID
        ref: 'User', 
        required: true
        // have to pass additional data with our person create (POST)
        // we might have stale data without owner property
    }
    
},{timestamps: true});

const CyrptoCoin = mongoose.model("CyrptoCoin", coinSchema);

module.exports = CyrptoCoin
