require('dotenv/config');
const app = require('./app')
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL_LOCAL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(()=> console.log("Connected to mongoDB"))
.catch(err => console.error("MongoDB connected Failed"));

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`EasyShop running on port ${port}`)
})