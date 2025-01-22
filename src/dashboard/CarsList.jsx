import React from "react";
import { Link } from "react-router-dom";
import Car from "./Car";
import { useState, useEffect } from "react";

function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Cars</h2>
      <div
        id="products"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6"
      >
        {cars.map((car) => (
          <Car key={car.id} car={car}></Car>
        ))}
      </div>
    </div>
  );
}

export default CarsList;
