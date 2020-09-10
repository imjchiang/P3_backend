const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Comment Schema
const CommentSchema = new Schema(
{
    //an array of text
    descriptionsAndCode:
    [{
        type: String,
        default: "No description or code available"
    }],
    //url for image of code snippets
    imgUrl:
    [{
        type: String,
        default: undefined
    }],
    //User passed by the reference to id
    author:
    {
        type: Schema.ObjectId,
        ref: "User"
    },
    //an array of Users passed by the reference to id
    upvote:
    [{
        type: Schema.ObjectId,
        ref: "User"
    }],
    //an array of Users passed by the reference to id
    downvote:
    [{
        type: Schema.ObjectId,
        ref: "User"
    }],
    //default false, can be changed to true if Post author indicates
    starredOnPost: 
    {
        type: Boolean,
        default: false
    },
    date:
    {
        type: Date,
        default: Date.now()
    }
});

module.exports = Comment = mongoose.model("Comment", CommentSchema);


//User Schema
const PostSchema = new Schema(
{
    title:
    {
        type: String,
        required: true
    },
    //an array of tags passed by the reference to id
    tags:
    [{
        type: Schema.ObjectId,
        ref: "Tag"
    }],
    //an array of text
    descriptionAndCode:
    [{
        type: String,
        default: "No description or code available"
    }],
    imgUrl:
    [{
        type: String,
    }],
    //User passed by the reference to id
    author:
    {
        type: Schema.ObjectId,
        ref: "User"
    },
    //an array of Users passed by the reference to id
    upvote:
    [{
        type: Schema.ObjectId,
        ref: "User"
    }],
    //an array of Users passed by the reference to id
    downvote:
    [{
        type: Schema.ObjectId,
        ref: "User"
    }],
    //default false, can be changed to true if Post author indicates
    solved: 
    {
        type: Boolean,
        default: false
    },
    //an array of comments embedded to the Post
    comments: [CommentSchema],
    date:
    {
        type: Date,
        default: Date.now()
    }
});

module.exports = Post = mongoose.model("Post", PostSchema);