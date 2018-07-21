var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    author: {
        //only be done with non-relational databse
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"                  // refers to the model we will be using
        },
        username: String
    }
});

module.exports = mongoose.model("Comment", commentSchema);