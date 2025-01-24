import { Facebook, Instagram, Snapchat } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed flex bg-[#859F3D] p-4 justify-between items-center  w-full bottom-0 mt-10">
      <div>
        <p>© 2025 patiNerede, Tüm hakları saklıdır.</p>
      </div>
      <div className="flex gap-5">
        <a href="/">
          <Facebook size="32" color="#d9e3f0" variant="Bold" />
        </a>
        <a href="/">
          <Instagram size="32" color="#d9e3f0" variant="Bold" />
        </a>
        <a href="/">
          <Snapchat size="32" color="#d9e3f0" variant="Bold" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
