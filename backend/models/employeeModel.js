const mongoose = require('mongoose');

const EmployeeData = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true,
        maxlength:20
        
    },
    department:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        maxlength:30
    },
    image:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }

})

module.exports = mongoose.model("EmpData", EmployeeData);