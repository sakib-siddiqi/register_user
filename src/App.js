import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Register from "./Pages/Register/Register";
import User from "./Pages/Users/User";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="users" element={<User />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}
export default App;
