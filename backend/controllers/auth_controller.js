const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt"); // password hashing function
const { createUserToken } = require("../middleware/auth");
const { User } = require("../models");




// http://localhost:4040/auth
// create account - POST - generate a model instance in the db -> creates a token 
// res.status(200).json({ message: 'hitting auth route' }) - test route    
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10); // 10 (from docs) -> number of times its hashed, unique string (num tied to performance), genSalt returns promise
        const passwordHash = await bcrypt.hash(req.body.password, salt); 
        req.body.password = passwordHash; // override req.body from form (console.log(req.body))
        const newUser = await User.create(req.body);
        res.status(200).json({currentUser: newUser, isLoggedIn: true,}); //userDoc gets sent to front end and then gets transformed 
    } catch (error) {
        res.status(400).json(error);
    }
});


// login - POST - creates a token if credentials match
// http://localhost:4040/Login
// SIGN IN
// POST /auth/login
router.post("/login", async (req, res, next) => {
    try {
      const loggingUser = req.body.username; //get username
      const foundUser = await User.findOne({ username: loggingUser }); 
      const token = await createUserToken(req, foundUser); //req- body with headers and compare against user - is it valid
    //   console.log("created token", token) - verify in postman
      res.status(200).json({
        user: foundUser,
        isLoggedIn: true,
        token,
      });
    } catch (err) {
      res.status(401).json({ error: err.message });
    }
  });
  
  
router.get('/profile/:id', async (req,res) => {
    try{

    }catch(err){
        console.log(err)
    }
})

// delete account 
router.delete("/:id", async (req, res) => {
    try {
        res.json(await User.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});




// app.use('/profile', userController)
//lcoalhost:4000/profile/edit/id

module.exports = router;