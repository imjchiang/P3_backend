const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const PostSchema = new Schema(
{
    title:
    {
        type: String,
        required: true
    },
    tags:
    [{
        type: Schema.ObjectId,
        ref: "Tag"
    }],
    descriptionsAndCode:
    [{
        type: Text,
        default: "No description or code available"
    }],
    author:
    {
        type: Schema.ObjectId,
        ref: "User"
    },
    upvote:
    [{
        type: Schema.ObjectId,
        ref: "User"
    }],
    downvote:
    [{
        type: Schema.ObjectId,
        ref: "User"
    }],
    solved: 
    {
        type: Boolean,
        default: false
    },
    comments: [CommentSchema],
    date:
    {
        type: Date,
        default: Date.now()
    }
});

module.exports = Post = mongoose.model("Post", PostSchema);