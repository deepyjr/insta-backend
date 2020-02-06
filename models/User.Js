const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    realname:String,
    password_hash:String,
    avatar: String,
    location:String,
    description:String
})

module.exports = mongoose.model('User',UserSchema);