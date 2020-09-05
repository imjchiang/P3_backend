const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const TagSchema = new Schema(
{
    name:
    [{
        type: String,
        default: ["git", "front-end", "back-end", "HTML", 
                    "CSS", "JavaScript", "databases", "MongoDB", 
                    "Sequel", "node.js", "autherization", 
                    "React", "EJS", "JSX"]
    }]
});

module.exports = Tag = mongoose.model("Tag", TagSchema);