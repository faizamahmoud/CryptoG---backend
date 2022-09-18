

const mongoose = require("mongoose");

const CoinSchema = new mongoose.Schema({
    time: Date,
    asset_id_quote: String,
    rate: Number
    
},{timestamps: true});

const CyrptoCoin = mongoose.model("CyrptoCoin", CoinSchema);

module.exports = CyrptoCoin
