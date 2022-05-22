const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    members:[],
    messages:[{
        username: String,
        message: String,
        messageType: String
    }]
})
const Chat = mongoose.model("Chat", chatSchema)
modules.export = {
    Chat
}