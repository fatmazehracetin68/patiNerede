import React from "react";
import AnimalCard from "./AnimalCard";
import blackCat from "../assest/black-cat.webp";
import boncuk from "../assest/boncuk.jpeg";
import max from "../assest/max.webp";
import dumanCat from "../assest/dumanCat.jpeg";
import { useNavigate } from "react-router-dom";

const LostAnimals = () => {
  const navigate = useNavigate();
  const animals = [
    { id: 1, name: "Kara", location: "İstanbul", image: blackCat },
    { id: 2, name: "Boncuk", location: "Ankara", image: boncuk },
    { id: 3, name: "Max", location: "İzmir", image: max },
    { id: 4, name: "Luna", location: "Bursa", image: dumanCat },
  ];
  return (
    <div className="bg-[#EDE8DC] my-10 p-5">
      <div className=" w-[80%] justify-center items-center mx-auto">
        <div>
          <h2 className="text-[#ff8a65] text-3xl text-bold text-center">KAYIP HAYVANLAR</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        <div className=" flex justify-center">
          <button
            onClick={() => navigate("/lost-animals")}
            className="bg-[#ff8a65] w-52 h-10 rounded-md "
          >
            Hepsini Göster
          </button>
        </div>
      </div>
    </div>
  );
};

export default LostAnimals;
