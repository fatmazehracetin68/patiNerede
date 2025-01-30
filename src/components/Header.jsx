import React, { useState } from "react";
import { HambergerMenu } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const titleLinks = [
    { label: "KAYIPLAR", path: "/lost-animals" },
    { label: "BULUNAN HAYVANLAR", path: "/finding-animal" },
    { label: "YUVASINA KAVUŞANLAR", path: "homeReturn-aimals" },
    { label: "KAYBIM VAR", path: "/form-lost-animal" },
    { label: "KAYIP BULDUM", path: "/finding-animal-form" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#859F3D] shadow-md ">
      <div className="flex flex-row bg-[#1A1A19] p-4 justify-around items-center mt-10">
        <div className="bg-[#F6FCDF] p-3 rounded-xl">
          <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
            patiNerede
          </h1>
        </div>

        <div className="hidden md:flex space-x-6">
          {titleLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => navigate(link.path)}
              className="text-white hover:text-[#859F3D] m-3"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HambergerMenu size="32" color="#FF8A65" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col bg-[#1A1A19] py-4">
          {titleLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(link.path);
                setMenuOpen(false);
              }}
              className="text-white hover:text-[#859F3D] py-2 text-center"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
