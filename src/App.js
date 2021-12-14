import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Register/Register";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </main>
  );
}
export default App;
