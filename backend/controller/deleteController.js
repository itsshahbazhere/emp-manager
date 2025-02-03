const EmpData = require('../models/employeeModel');

exports.deleteEmployee = async(req,res) => {
    try{
        const {id} = req.params;
        const deletedEmployee = await EmpData.findOneAndDelete({_id:id});
        if (!deletedEmployee) {
            return res.status(404).json({
                status: false,
                message: "Employee not found", // If the employee does not exist
            });
        }
        return res.status(200).json({
            status:true,
            message:"Employee deleted successfully",
        })

    }
    catch(err){
        console.error('Error while deleting employee data:', err);
        return res.status(500).json({
            status:false,
            message:err.message,

        })
    }
}