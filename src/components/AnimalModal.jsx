import React, { useState } from "react";
import AnimalCard from "./AnimalCard";

const AnimalList = ({ animals }) => {
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
    <div>
      {animals.map((animal) => (
        <div key={animal.id}>
          <AnimalCard
            animal={animal}
            isModalOpen={isModalOpen && selectedAnimal?.id === animal.id}
            closeModal={closeModal}
            openModal={() => openModal(animal)}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
