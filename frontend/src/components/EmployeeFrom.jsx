import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const EmployeeForm = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createEmployee = async (data) => {
    try {
      const savedUserResponse = await fetch(`${apiUrl}/createEmployee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("employee data...", savedUserResponse);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(createEmployee)}>
        <div className="space-y-4 sm:w-110 w-80">
          <div className="flex flex-col">
            <label 
            className="font-semibold mb-2"
            htmlFor="name">Employee Name</label>
            <input
              type="text"
              required={true}
              {...register("name")}
              placeholder="Enter Your Full Name"
              className="border rounded-md border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col">
            <label 
                        className="font-semibold mb-2"

            htmlFor="email">Employee Email Id</label>
            <input
              required={true}
              {...register("email")}
              placeholder="Enter Your Email"
              className="border rounded-md border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label 
              className="font-semibold mb-2"

            htmlFor="title">Employee Title</label>
            <input
              required={true}
              {...register("title")}
              type="text"
              placeholder="Enter Your Employee Title"
              className="border rounded-md border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col">
            <label 
             className="font-semibold mb-2"
            htmlFor="department">Employee Department</label>
            <input
              required={true}
              {...register("department")}
              type="text"
              placeholder="Enter Your Employee Department"
              className="border rounded-md border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col">
            <label
             className="font-semibold mb-2"
             htmlFor="role">Employee Role</label>
            <input
              required={true}
              {...register("role")}
              type="text"
              placeholder="Enter Your Employee Role"
              className="border rounded-md border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className="flex select-none bg-indigo-600 shadow-[0_10px_20px_rgba(50,50,229,0.4)] hover:bg-indigo-800 transition ease-in-out duration-300 cursor-pointer px-4 py-2 rounded-md text-md font-semibold sm:w-110 w-80 items-center justify-center mb-8"
          >
            Create Employee
            <GoArrowRight className="mt-1 ml-1 text-lg" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
