const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const router = require('./routes/friendsRoute');

const port = 5000
const app = express()

mongoose.connect('mongodb+srv://shawnxie0125:Alh840019843@cluster0.au9fx.mongodb.net/appDB?retryWrites=true&w=majority',
{useNewUrlParser: true,
    useUnifiedTopology: true, }, 
()=>{
    console.log("Success");
});

mongoose.connection.on("open", ()=>{
    console.log("DB Connected");
})

app.listen(port, ()=> {console.log(`Server started running on port ${port}`)})
//app.use(express.json());
app.use(cors());
app.use(express.json());

app.use('/api/user', require('./routes/userRoute'))
app.use('/api/friends', require('./routes/friendsRoute'))

router.get('/')
console.log("server running");