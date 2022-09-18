const mongoose = require("mongoose");


const CoinSchema = new mongoose.Schema({
    time: {type: Date, default:null},
    asset_id_quote: {type: String, default:null},
    rate: {type: Number, default:null}
    
},{timestamps: true});

const CyrptoCoin = mongoose.model("CyrptoCoin", CoinSchema);

module.exports = CyrptoCoin
