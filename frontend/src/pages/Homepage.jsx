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
    <div className=" text-white w-full h-[100vh]">
      <div className="w-[90%] mx-auto mt-5">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[20px] font-semibold mb-1">Employees</h2>
            <p className="text-sm text-gray-300 mb-2">
              This is a list of all employees. You can add new employees, edit
              or delete existing ones.
            </p>
          </div>
          <div className="bg-blue-600 p-2 font-bold text-sm rounded-md ">
            <button
              onClick={() => {
                navigate("/addemployee");
              }}
              className="capitalize"
            >
              add employee
            </button>
          </div>
        </div>
        <div className="">
          <table className="w-full">
            <thead className="border border-gray-400 p-4">
              <tr className="flex justify-between">
                <th>Employee</th>
                <th>Title</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {empData?.data.map((person) => (
                <tr key={person.name}>
                  <td>
                    <div className="">
                      <img width={50} src={person.image} alt={person.name} />
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
