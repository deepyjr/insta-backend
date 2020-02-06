const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    username:String,
    location:String,
    image:String,
    like: String,
    description:String
})

module.exports = mongoose.model('Post',PostSchema);