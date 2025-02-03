const EmpData = require('../models/employeeModel');

exports.createEmployee = async(req,res) => {
    try{

        const {name, email, title, department, role} = req.body;
        if(!name || !email || !title || !department || !role){
            return res.status(400).json({
                message: "Please fill all the fields"
            })
        }
        const emp = new EmpData({name, email, title, department, role,
                                image:`https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png`,
        });
        const allData = await emp.save();
        return res.status(201).json({
            status:true,
            message:"Employee created successfully",
            data:allData
        })


    }
    catch(err){
        console.error('Error creating employee data:', err);
        return res.status(500).json({
            status:false,
            message:err.message,

        })
    }
}