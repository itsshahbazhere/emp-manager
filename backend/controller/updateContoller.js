const EmpData = require('../models/employeeModel');

exports.updateEmployee = async(req,res) => {
    try{
        const {id} = req.params;
        const {name, email, title, department, role} = req.body;
        const updateEmployee = await EmpData.findOneAndUpdate({_id:id},{name, email, title, department, role, updatedAt:Date.now()});
        if (!updateEmployee) {
            return res.status(404).json({
                status: false,
                message: "Employee not found", // If the employee does not exist
            });
        }
        return res.status(200).json({
            status:true,
            message:"Employee updated successfully",
        })

    }
    catch(err){
        console.error('Error while updating employee data:', err);
        return res.status(500).json({
            status:false,
            message:err.message,

        })
    }
}