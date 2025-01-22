import { useState } from "react";
import "./App.css";
import CarsList from "./dashboard/CarsList.jsx";
import CarDetails from "./dashboard/CarDetails.jsx";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div className="flex-1">
        <Header></Header>
        <Routes>
          <Route path="/" element={<CarsList></CarsList>}></Route>
          <Route
          path="/cars/:id"
          element={<CarDetails></CarDetails>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
