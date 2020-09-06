const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const TagSchema = new Schema(
{
    name:
    {
        type: String
    }
});

module.exports = Tag = mongoose.model("Tag", TagSchema);

"git", "front-end", "back-end", "fullstack", 
"HTML", "CSS", "JavaScript", "databases", 
"MongoDB", "Sequel", "node.js", 
"autherization", "React", "EJS", "JSX"