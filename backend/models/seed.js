
const db = require('./index')


const data = [
    {
        "time": "87/87/87",
        "asset_id_quote": "bitcoin",
        "rate": "1.22"
    },
    {
        "time": "87/87/87",
        "asset_id_quote": "dogecoin",
        "rate": "5.4"
    }
]

async function load(){
    try{
        let reload = await db.Coin.insertMany(data);
        console.log('loading')
    }catch(err){
        console.log(err)
    }
}

load()

// module.exports = data;