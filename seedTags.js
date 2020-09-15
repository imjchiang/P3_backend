const db = require("./models");
require("dotenv").config();
const { Mongoose } = require("mongoose");
const Tag = require("./models/Tag");

// Inserting data 

Tag.insertMany([
    { name: 'git'},
    { name: 'front-end' },
    { name: 'back-end' },
    { name: 'fullstack' }, 
    { name: 'HTML' }, 
    { name: 'CSS' }, 
    { name: 'JavaScript' }, 
    { name: 'database' },
    { name: 'MongoDB' }, 
    { name: 'Sequel' },
    { name: 'node.js' }, 
    { name: 'authorization' },
    { name: 'React' }, 
    { name: 'EJS' },
    { name: 'JSX' }
]).then(function() {
    console.log("Data inserted")
}).catch(function(error){
    console.log(error)
})


// tag ids for reference 

// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703cde"),
// 	"posts" : [ ],
// 	"name" : "git",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703cdf"),
// 	"posts" : [ ],
// 	"name" : "front-end",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce0"),
// 	"posts" : [ ],
// 	"name" : "back-end",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce1"),
// 	"posts" : [ ],
// 	"name" : "fullstack",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce2"),
// 	"posts" : [ ],
// 	"name" : "HTML",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce3"),
// 	"posts" : [ ],
// 	"name" : "CSS",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce4"),
// 	"posts" : [ ],
// 	"name" : "JavaScript",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce5"),
// 	"posts" : [ ],
// 	"name" : "database",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce6"),
// 	"posts" : [ ],
// 	"name" : "MongoDB",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce7"),
// 	"posts" : [ ],
// 	"name" : "Sequel",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce8"),
// 	"posts" : [ ],
// 	"name" : "node.js",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ce9"),
// 	"posts" : [ ],
// 	"name" : "authorization",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703cea"),
// 	"posts" : [ ],
// 	"name" : "React",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703ceb"),
// 	"posts" : [ ],
// 	"name" : "EJS",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f5548b8949a20ecb3703cec"),
// 	"posts" : [ ],
// 	"name" : "JSX",
// 	"__v" : 0
// }