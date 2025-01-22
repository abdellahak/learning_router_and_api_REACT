import React from "react";
import { Car, User, FileText, BarChart2, Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, onToggle }) {
  const menuItems = [
    { icon: Car, label: "Cars", active: true },
    { icon: User, label: "Clients" },
    { icon: FileText, label: "Contracts" },
    { icon: BarChart2, label: "Statistics" },
  ];
  return (
    <aside
      className={`${
        isOpen ? "lg:w-64 py-4" : "w-20 px-2"
      } p-4 bg-[#1a2234] text-gray-300 transition-all duration-300 ease-in-out relative`}
    >
      <button
        onClick={onToggle}
        className="absolute top-6 -right-12 bg-[#1a2234] p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors z-50 border border-gray-700"
      >
        <Menu size={24} />
      </button>

      <div className="my-3">
        <h2
          className={`text-xl font-bold text-white flex items-center gap-2 ${
            !isOpen && "justify-center"
          } text-nowrap`}
        >
          <Car className="h-6 w-6" />
          {isOpen && "Mingo Cars"}
        </h2>
      </div>

      <nav className="mt-10">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link to="/" className={`flex items-center gap-3 px-4 py-2 rounded-lg ${item.active ? 'bg-blue-600 text-white' : 'hover:bg-gray-700/50'} ${!isOpen && 'justify-center'}`} title={!isOpen ? item.label: undefined} >
                <item.icon className="w-5 h-5"/>
                {isOpen && item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
export default Sidebar;
