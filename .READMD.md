# Employee Manager

A simple Employee Management System built using **React (Vite)**, **Tailwind CSS**, **MongoDB**, **Express.js**, **Node.js**, and **Mongoose ODM**.

## Features

- **Home Page**: Displays all employee data.
- **Create Employee Page**: Allows adding new employees and deleting existing ones.
- **Single Page Application (SPA)**: Smooth navigation between pages.
- **RESTful API**: Backend built using Express.js and MongoDB.

## Technologies Used

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/itsshahbazhere/emp-manager.git
   cd emp-manager
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Setup environment variables:**
   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
     ```env
     PORT=3000
     DATABASE_URL=your_mongodb_connection_string
     ```
4. **Run the frontend & backend:**
   - Start the backend:
     ```sh
     cd backend
     npm run dev
     ```
   - Start the frontend:
     ```sh
     cd frontend
     npm run dev
     ```


## API Endpoints

- **GET /getEmployee** - Get all employees
- **POST /createEmployee** - Add a new employee
- **DELETE /deleteEmployee/:id** - Delete an employee