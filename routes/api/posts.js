require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../models");

router.get("/", (req, res ) =>
{
    res.json({msg: "post routee working"})
})

module.exports = router;