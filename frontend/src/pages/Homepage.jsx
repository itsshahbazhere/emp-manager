import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Homepage = () => {
  const navigate = useNavigate();
  const [empData, setEmpData] = useState();

  const apiUrl = import.meta.env.VITE_API_URL;
  const getAllData = async () => {
    try {
      const getEmployee = await fetch(`${apiUrl}/getEmployee`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await getEmployee.json();
      setEmpData(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async(employeeId) =>{
    try {
      const deleteData = await fetch(`${apiUrl}/deleteEmployee/${employeeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(deleteData.ok){
        console.log('employee deleted successfully');
        getAllData();
      }
    } catch (err) {
      console.log(err);
      console.log("error while deleting employee data")
    }

  }



  return (
    <div className=" text-white min-h-screen overflow-y-auto w-full">
      <div className="w-[85%] mx-auto mt-5 mb-10">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h2 className="text-[20px] font-semibold mb-1">Employees</h2>
            <p className="text-sm text-gray-500 mb-2 sm:mr-4">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>

          <button
            className="bg-indigo-600 shadow-[0_10px_20px_rgba(50,50,229,0.4)] select-none capitalize py-2 px-8 font-bold text-sm w-full sm:w-60 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:bg-indigo-800 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/addemployee");
            }}
          >
            add employee
          </button>
        </div>
        

        <div className="mt-8 border-3 rounded-xl border-gray-800">
          <table className="w-full">
            
              <thead>
                <tr className="bg-gray-800 font-light text-gray-300 select-none text-sm md:text-base ">
                  <td className="md:py-2.5 p-1.5 md:px-4 px-2.5 rounded-tl-lg">Employee</td>
                  <td>Title</td>
                  <td >Role</td>
                  <td className="rounded-tr-lg sm:p-0 p-1">Delete</td>
                </tr>
              </thead>
              <tbody className="md:text-base text-xs" >
              {empData?.data && empData?.data.length>0 ? (empData.data.map((person) => (
                <tr className="border-t border-gray-800" key={person._id}>
                  <td className="flex items-center gap-3 md:p-4 p-2">
                    <div className="md:text-3xl text-gray-400 md:border-2 border border-gray-600 rounded-full p-1 bg-slate-900">
                      <CiUser />
                    </div>
                    <div>
                      <p className="font-semibold capitalize ">{person.name}</p>
                      <p className="font-light text-gray-300 lowercase">
                        {person.email}
                      </p>
                    </div>
                  </td>
                  <td className="py-2">
                    <p className="font-semibold capitalize">{person.title}</p>
                    <p className="font-light text-gray-300 capitalize">
                      {person.department}
                    </p>
                  </td>
                  <td className="">
                    <p className=" font-semibold capitalize">{person.role}</p>
                    
                  </td>
                  <td className="">
                  <div className="text-2xl">
                  <MdDelete  
                  onClick={()=>handleDelete(person._id)}
                  className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200 ease-in-out "/>
                  
                  </div>
                  </td>
                </tr>
              ))
              ):(
                <tr>
                  <td colSpan="4" className="capitalize text-gray-500 p-4 text-center">No data available</td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
