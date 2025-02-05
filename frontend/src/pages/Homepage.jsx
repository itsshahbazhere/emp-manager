import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  console.log(empData);

  return (
    <div className=" text-white min-h-screen overflow-y-auto w-full">
      <div className="w-[85%] mx-auto mt-5">
        <div className="flex justify-between items-center flex-wrap">
          <div>
            <h2 className="text-[20px] font-semibold mb-1">Employees</h2>
            <p className="text-sm text-gray-500 mb-2 sm:mr-4">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>

          <button
            className="bg-indigo-600 capitalize py-2 px-8 font-bold text-sm w-full sm:w-60 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:bg-indigo-800 transition duration-300 ease-in-out"
            onClick={() => {
              navigate("/addemployee");
            }}
          >
            add employee
          </button>
        </div>

        <div className="mt-4 border-3 rounded-xl border-gray-800">
          <table className="w-full">
            <tr className="bg-gray-800 font-light text-gray-300">
              <td className="py-2.5 px-4 rounded-tl-lg">Employee</td>
              <td>Title</td>
              <td className="rounded-tr-lg">Role</td>
            </tr>
            {empData?.data.map((person) => (
              <tr className="border-b border-gray-800" key={person.name}>
                <td className="flex gap-3 p-4">
                  <div className="">
                    <img
                      className="rounded-full w-10"
                      width={50}
                      src={person.image}
                      alt={person.name}
                    />
                  </div>
                  <div>
                    <p>{person.name}</p>
                    <p>{person.email}</p>
                  </div>
                </td>
                <td>
                  <p>{person.title}</p>
                  <p>{person.department}</p>
                </td>
                <td>
                  <p>{person.role}</p>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
