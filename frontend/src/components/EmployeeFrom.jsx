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
      const savedUserResponse = await fetch(`${apiUrl}//createEmployee`, {
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
        <div>
          <div className="flex flex-col">
            <label htmlFor="name">Employee Name</label>
            <input
              type="text"
              required={true}
              {...register("name")}
              placeholder="Enter Your Full Name"
              className="border rounded-md border-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Employee Email Id</label>
            <input
              required={true}
              {...register("email")}
              placeholder="Enter Your Email"
              className="border rounded-md border-gray-500"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="title">Employee Title</label>
            <input
              required={true}
              {...register("title")}
              type="text"
              placeholder="Enter Your Employee Title"
              className="border rounded-md border-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="department">Employee Department</label>
            <input
              required={true}
              {...register("department")}
              type="text"
              placeholder="Enter Your Employee Department"
              className="border rounded-md border-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="role">Employee Role</label>
            <input
              required={true}
              {...register("role")}
              type="text"
              placeholder="Enter Your Employee Role"
              className="border rounded-md border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="flex bg-blue-800 px-4 py-2 rounded-md text-md font-semibold"
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
