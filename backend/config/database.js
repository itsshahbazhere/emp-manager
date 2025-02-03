const mongoose = require('mongoose');
require('dotenv').config()
const {DATABASE_URL} = process.env;
const dbConnect = () =>{
    mongoose.connect(DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch((err)=>{
        console.log('Error connecting to MongoDB:', err);
        process.exit(1);
    })
}
 
module.exports = dbConnect;