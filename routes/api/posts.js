require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const passport = require("passport");
const JWT_SECRET = process.env.JWT_SECRET;


const db = require("../../models");

router.get("/", (req, res ) =>
{
    res.json({msg: "Posts get route working"})
})


// router.post("/", passport.authenticate('jwt', { session: false }), (req,res) => 

router.post("/", (req,res) => 
{   
    db.Post.create(req.body)
    .then(createdPost => {
        console.log(createdPost)
        res.status(201).send(createdPost)
    })
    .catch(err => {
        console.log('Error while creating new post', err)
        if(err.name === 'Valication Error'){
            res.status(406).send({message: 'Validation Error'})
        } else {
            res.status(503).send({message: "Database or server error!"})
        }
    })

})
module.exports = router;