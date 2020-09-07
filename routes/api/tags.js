require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const JWT_SECRET = process.env.JWT_SECRET;

const db = require("../../models");

router.get('/', (req,res) => {
    db.Tag.find()
    .then(foundTag => {
        console.log(foundTag)
        res.send(foundTag)
    })
    .catch(err=>{
        console.log(err)
        res.status.apply(503).send({message: 'Database asleep?'})
    })
})

module.exports = router;