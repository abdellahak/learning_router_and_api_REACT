import react from "react";
import { Link } from "react-router-dom";

const Car = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{car.model}</h3>
          <div className="text-right">
            <span className="text-2xl font-bold">{car.price} MAD</span>
            <span className="text-gray-500 text-sm block">per day</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between">
            <p className="font-bold text-sm">Year : </p>
            <p className="text-sm text-gray-600 mb-1">{car.year}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-sm">Type : </p>
            <p className="text-sm text-gray-600 mb-1">{car.type}</p>
          </div>
          <p className="text-xs text-gray-500">Agadir</p>
        </div>
        <div className="mt-4 flex justify-stretch gap-1">
        <Link
          to={`/cars/${car.id}`}
          className="text-center mt-1 flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors block"
        >
          Details
        </Link>
        <Link
          to={`/cars/edit/${car.id}`}
          className="text-center mt-1 flex-1 bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors block"
        >
          Modify
        </Link>
        <Link 
          to={`/cars/delete/${car.id}`}
          className="text-center mt-1 flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors block">
            Delete
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Car;
