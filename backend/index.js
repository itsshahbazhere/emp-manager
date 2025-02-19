const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const dbConnect = require('./config/database');
const employeeRoute = require('./routes/employee');

app.use(express.json());
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
    })
);
app.use('/api/v1',employeeRoute);
dbConnect();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('<h1>This is "/" route</h1>')
})
