import React from "react";
import AnimalCard from "./AnimalCard";
import blackCat from "../assest/black-cat.webp";
import boncuk from "../assest/boncuk.jpeg";
import max from "../assest/max.webp";
import dumanCat from "../assest/dumanCat.jpeg";

const LostAnimals = () => {
  const animals = [
    { id: 1, name: "Kara", location: "İstanbul", image: blackCat },
    { id: 2, name: "Boncuk", location: "Ankara", image: boncuk },
    { id: 3, name: "Max", location: "İzmir", image: max },
    { id: 4, name: "Luna", location: "Bursa", image: dumanCat },
  ];
  return (
    <div className="bg-[#EDE8DC] my-10 p-5">
      <div className="relative">
        <div className="h-1 w-52 bg-[#ff8a65] absolute bottom-3 left-96"></div>
        <h2 className="text-[#ff8a65] text-3xl text-bold text-center">KAYIP HAYVANLAR</h2>
        <div className="h-1 w-52 bg-[#ff8a65] absolute bottom-3 right-96"></div>
      </div>
      <div className="flex justify-evenly items-center my-5">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
      <div className=" flex justify-center">
        <button className="bg-[#ff8a65] w-52 h-10 rounded-md ">Hepsini Göster</button>
      </div>
    </div>
  );
};

export default LostAnimals;
