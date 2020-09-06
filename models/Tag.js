const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const TagSchema = new Schema(
{
    name:
    {
        type: String
    },
    posts: 
    [{
        type: Schema.ObjectId,
        ref: "Post"
    }],

});

module.exports = Tag = mongoose.model("Tag", TagSchema);

