import React, { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import ExampleLostAnimals from "../components/ExampleLostAnimals";

const KayıpSayfası = () => {
  const [lost, setLost] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (animal) => {
    setSelectedAnimal(animal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnimal(null);
  };

  useEffect(() => {
    // localStorage'dan kaybolan ilanları al
    const savedLost = JSON.parse(localStorage.getItem("kayipIlanlari")) || [];
    setLost(savedLost);
  }, []);

  return (
    <div className="p-4 mt-28 mx-28">
      <ExampleLostAnimals openModal={openModal} closeModal={closeModal} />
      {lost.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {lost.map((ilan, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAnimal(ilan);
                setIsModalOpen(true);
              }}
            >
              <AnimalCard
                animal={{
                  image: ilan.resim,
                  name: ilan.hayvanIsmi,
                  location: ilan.kaybolduguIl,
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500"></p>
      )}

      {isModalOpen && selectedAnimal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            <img
              src={selectedAnimal.resim}
              alt={selectedAnimal.hayvanIsmi}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold text-center mt-2">{selectedAnimal.ilanBasligi}</h3>
            <div className="mt-4 text-gray-700 space-y-2">
              <p>
                <strong>Hayvan İsmi:</strong> {selectedAnimal.hayvanIsmi}
              </p>
              <p>
                <strong>Cinsiyet:</strong> {selectedAnimal.cinsiyet}
              </p>
              <p>
                <strong>Tür:</strong> {selectedAnimal.turu}
              </p>
              <p>
                <strong>Kaybolduğu İl:</strong> {selectedAnimal.kaybolduguIl}
              </p>
              <p>
                <strong>Kayıp Tarihi:</strong> {selectedAnimal.kayipTarihi}
              </p>
              <p>
                <strong>Açıklama:</strong> {selectedAnimal.ilanAciklamasi}
              </p>
              <p>
                <strong>Sahibi:</strong> {selectedAnimal.ad} {selectedAnimal.soyad}
              </p>
              <p>
                <strong>Telefon:</strong> {selectedAnimal.telefon}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KayıpSayfası;
