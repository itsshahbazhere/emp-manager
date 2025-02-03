const EmpData = require('../models/employeeModel');

exports.getEmployee = async(req,res) => {
    try{
        const empData =await EmpData.find({})
        return res.status(200).json({
            message:"Employee data fetched successfully",
            data:empData
        })

    }
    catch(err){
        console.error('Error fetching employee data:', err);
        return res.status(500).json({
            status:false,
            message:"Failed to get data",
            error:err.message,

        })
    }
}