
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    friends: [],
    chats:[{
        chatId: String,
        members:[]
    }]
});
//const User = mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema)