const express = require('express');
const app = express();
require('dotenv').config() // gives access to .env in package.json 
const PORT = process.env.PORT || 4000;
const cors = require('cors'); // allows us to set up front end and backend to talk to eachother
const morgan = require('morgan'); //middleware to log HTTP requests and erros and simplifies the process - helpful for debugging
const helmet = require('helmet'); // a security best practice - look into middleware options

// const oneDay = 1000 * 60 * 60 * 24;

// * Controllers
const coinsController = require('./controllers/coins_controller')
const userController = require('./controllers/auth_controller')

// * Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.use(cors()); //order doesnt matter

app.use(morgan('dev')); //order doesnt matter 
app.use(helmet());

app.use('/', coinsController)
app.use('/auth', userController)

 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


