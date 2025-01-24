import React from "react";

const AnimalCard = ({ animal }) => {
  return (
    <div className="w-48 h-56 rounded-md bg-[#1A1A19] overflow-hidden">
      <img src={animal.image} alt={animal.name} className="w-full h-40 object-cover rounded-t-md" />

      <h3 className="text-xl font-bold text-center text-white">{animal.name}</h3>
      <h4 className="text-center text-lg text-white">{animal.location}</h4>
    </div>
  );
};

export default AnimalCard;
