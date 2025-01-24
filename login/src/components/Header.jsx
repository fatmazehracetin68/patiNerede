import React, { useState } from "react";
import { HambergerMenu } from "iconsax-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const titleLinks = ["KAYIPLAR", "YUVASINA KAVUŞANLAR", "KAYBIM VAR", "KAYIP BULDUM"];
  return (
    <div className="flex flex-col bg-[#859F3D]">
      <div className="flex flex-row bg-[#1A1A19] p-4 justify-around items-center mt-10">
        <div className="bg-[#F6FCDF] p-3 rounded-xl">
          <h1 className="text-xl font-bold">patiNerede</h1>
        </div>

        <div className="hidden md:flex space-x-6">
          {titleLinks.map((link, index) => (
            <a key={index} href="#" className="text-white hover:text-[#859F3D] m-3">
              {link}
            </a>
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
            <a key={index} href="#" className="text-white hover:text-[#859F3D] py-2 text-center">
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
