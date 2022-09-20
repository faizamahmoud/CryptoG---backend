const mongoose = require("mongoose"); // Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. 

// users can buy multiple kinds of coins

const coinSchema = new mongoose.Schema({
    id: Number,
    name:String,
    symbol:String,
    cmc_rank:Number,
    num_market_pairs: Number,
    circulating_supply: Number,
    total_supply: Number,
    max_supply: Number,
    last_updated: {type:String, default:'Puppo'},
    date_added:{type:String, default:'Barney'},
    asset_id_quote: {type: String, default: null},
    rate: {type: Number, default: null},
    quote:{
        USD: {
            "price": Number,
                    "volume_24h": Number,
                    "volume_change_24h": Number,
                    "percent_change_1h": Number,
                    "percent_change_24h": Number,
                    "percent_change_7d": Number,
                    "market_cap": Number,
                    "market_cap_dominance": Number,
                    "fully_diluted_market_cap": Number,
                    "last_updated": String
        }},
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId, //anytime we store a user, it should be set to the objectID
    //     ref: 'User', 
    //     required: true
    //     // have to pass additional data with our person create (POST)
    //     // we might have stale data without owner property
    // }
    
},{timestamps: true});

const CyrptoCoin = mongoose.model("CyrptoCoin", coinSchema);

module.exports = CyrptoCoin
