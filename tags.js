const db = require("./models");
require("dotenv").config();
const { Mongoose } = require("mongoose");
const Tag = require("./models/Tag");

// Tag.insertMany([
//     { name: 'git'},
//     { name: 'front-end' },
//     { name: 'back-end' },
//     { name: 'fullstack' }, 
//     { name: 'HTML' }, 
//     { name: 'CSS' }, 
//     { name: 'JavaScript' }, 
//     { name: 'database' },
//     { name: 'MongoDB' }, 
//     { name: 'Sequel' },
//     { name: 'node.js' }, 
//     { name: 'authorization' },
//     { name: 'React' }, 
//     { name: 'EJS' },
//     { name: 'JSX' }
// ]).then(function() {
//     console.log("Data inserted")
// }).catch(function(error){
//     console.log(error)
// })



// tag ids for reference 

// { "_id" : ObjectId("5f546ed4c88f10e8b94acd96"), 
//    "name" : "git", 
//    "__v" : 0 
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acd97"),
// 	"name" : "front-end",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acd98"),
// 	"name" : "back-end",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acd99"),
// 	"name" : "fullstack",
// 	"__v" : 0
// }
// { 
//    "_id" : ObjectId("5f546ed4c88f10e8b94acd9a"), 
//    "name" : "HTML", 
//    "__v" : 0 
// }
// { 
//     "_id" : ObjectId("5f546ed4c88f10e8b94acd9b"), 
//     "name" : "CSS", 
//     "__v" : 0 
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acd9c"),
// 	"name" : "JavaScript",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acd9d"),
// 	"name" : "database",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acd9e"),
// 	"name" : "MongoDB",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acd9f"),
// 	"name" : "Sequel",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acda0"),
// 	"name" : "node.js",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acda1"),
// 	"name" : "authorization",
// 	"__v" : 0
// }
// {
// 	"_id" : ObjectId("5f546ed4c88f10e8b94acda2"),
// 	"name" : "React",
// 	"__v" : 0
// }
// {  
//  "_id" : ObjectId("5f546ed4c88f10e8b94acda3"), 
//  "name" : "EJS", 
//   "__v" : 0 
// }

// {   
// "_id" : ObjectId("5f546ed4c88f10e8b94acda4"), 
// "name" : "JSX", 
// "__v" : 0 
// }
