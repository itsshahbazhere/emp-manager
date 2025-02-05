import React from "react";
import { TfiControlBackward } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeFrom";

const CreateEmp = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white">
      <div>
        <img
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
        <h1 className="text-4xl font-bold">
          Empower your business with our employee creation!
        </h1>
      </div>
      <div>
        <div>
          <h2 className="text-4xl font-bold">Create a Employee</h2>
          <div
            onClick={() => {
              navigate("/");
            }}
            className="text-blue-500 flex cursor-pointer hover:underline"
          >
            <TfiControlBackward className="text-2xl mr-1" />
            <p className="transition font-semibold duration-200 ease-in-out">
              Back to all Employee List
            </p>
          </div>
        </div>
        <div>
          <EmployeeForm/>
        </div>
      </div>
    </div>
  );
};

export default CreateEmp;
