const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema(
{
    name:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    //an array of posts passed by the id
    posts: 
    [{
        type: Schema.ObjectId,
        ref: "Post"
    }],
    //an array of comments passed by the id
    comments:
    [{
        type: Schema.ObjectId,
        ref: "Comment"
    }],
    date:
    {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model("User", UserSchema);