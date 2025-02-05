import React from "react";
import { TfiControlBackward } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeFrom";

const CreateEmp = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white w-full flex flex-wrap h-[100vh] ">
      <div className="lg:w-[50%] relative w-full">
        {/* Image Container */}
        <img
          src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          className="aspect-square object-cover w-full lg:h-screen h-120"
        />

        {/* Lower-End Gradient Shadow */}
        <div className="mb-[-20px] absolute inset-0 bg-gradient-to-t from-black"></div>

        {/* Overlapping Text */}
        <h1 className="absolute text-center left-4 right-4 bottom-10 text-2xl sm:text-4xl font-bold text-white">
          Empower your business with our employee creation!
        </h1>
      </div>

      <div className="flex items-center mx-auto lg:mt-0 sm:mt-20 mt-10">
        <div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-2">Create a Employee</h2>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="text-indigo-600 flex cursor-pointer hover:underline mb-6"
            >
              <TfiControlBackward className="text-2xl mr-1" />
              <p className="transition font-semibold duration-200 ease-in-out">
                Back to all Employee List
              </p>
            </div>
          </div>
          <div>
            <EmployeeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmp;
