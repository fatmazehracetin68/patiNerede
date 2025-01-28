import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExampleLostAnimals from "./ExampleLostAnimals";

const LostAnimals = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const openModal = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  return (
    <div className="w-full p-5 ">
      <div className="bg-[#EDE8DC] mt-10 p-5">
        <div className=" w-[80%] justify-center items-center mx-auto">
          <div>
            <h2 className="text-[#ff8a65] text-3xl text-bold text-center">KAYIP HAYVANLAR</h2>
          </div>
          <ExampleLostAnimals
            openModal={openModal}
            isModalOpen={isModalOpen}
            selectedAnimal={selectedAnimal}
            closeModal={closeModal}
          />
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
    </div>
  );
};

export default LostAnimals;
