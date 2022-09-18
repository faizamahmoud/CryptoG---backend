const express = require('express');
const app = express();
require('dotenv').config()
require('./config/db.connection')
const session = require('express-session')
const MongoStore = require("connect-mongo");
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet'); // a security best practice - look into middleware options
const cookieParser = require('cookie-parser'); // auth
const oneDay = 1000 * 60 * 60 * 24;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
// middleware
/* SECTION App Config */
// testing sessions
app.use(session({secret: 'ssshhhhh'}));
// app.get('/', function(request, response){
//   console.log('Session ID: ', request.sessionID);
//     console.log('Session: ', request.session);
//     response.send('some text counter: '+request.session);
  
//   });
app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        // secret key is used to sign every cookie to say its is valid
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        // configure the experation of the cookie
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, //! two weeks  - are you logged in for two weeks?
        },
    })
);
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


