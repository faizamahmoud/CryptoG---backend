const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // a security best practice - look into middleware options
const cookieParser = require('cookie-parser'); // auth


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cookieParser());
app.get('/', function(req, res){
    // console.log('Cookies: ', req.cookies);
    res.cookie('name', 'express').send('cookie set'); 
 });
 

 // turn on the server listener
 app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
