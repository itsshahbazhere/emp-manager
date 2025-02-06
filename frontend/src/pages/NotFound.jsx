import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center select-none">
      <h1 className="sm:text-[150px] text-[80px] font-thin text-gray-600 ">
        OOPS!
      </h1>
      <p
        className=" sm:mb-6 mb-4 text-white text-xs sm:text-lg"
      >
        404 - THE PAGE CAN'T BE FOUND
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="capitalize w-70 h-10 outline:none sm:text-base font-semibold text-sm bg-indigo-600 px-4 py-1 rounded-lg text-white hover:bg-indigo-700 transition duration-300 ease-in-out shadow-[0_10px_20px_rgba(50,50,229,0.4)] cursor-pointer focus:outline-none"
      >
        go to home page
      </button>
    </div>
  );
};

export default NotFound;
