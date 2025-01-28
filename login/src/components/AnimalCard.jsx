import React, { useState } from "react";

const AnimalCard = ({ animal, isFound }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="w-48 h-56 my-5 rounded-md bg-[#1A1A19] overflow-hidden mx-auto cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
      >
        {isFound && (
          <div className="absolute top-3 -left-4 -rotate-45 bg-[#FF8A65] text-white text-lg font-bold px-4 py-1 rounded-lg z-10">
            Bulundu
          </div>
        )}
        <img
          src={animal.resim}
          alt={animal.hayvanIsmi}
          className="w-full h-40 object-cover rounded-t-md"
        />

        <h3 className="text-xl font-bold text-center text-white">{animal.hayvanIsmi}</h3>
        <h4 className="text-center text-lg text-white">{animal.kaybolduguIl}</h4>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            <img
              src={animal.resim}
              alt={animal.hayvanIsmi}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold text-center mt-2">{animal.hayvanIsmi}</h3>
            <p className="text-center text-gray-700">{animal.kaybolduguIl}</p>
            <p className="mt-2 text-sm text-gray-600">{animal.ilanAciklamasi}</p>
            <p className="mt-2 text-sm text-gray-600">Telefon: {animal.telefon}</p>
            <p className="mt-2 text-sm text-gray-600">Cinsiyet: {animal.cinsiyet}</p>
            <p className="mt-2 text-sm text-gray-600">
              Sahibi: {animal.ad} {animal.soyad}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimalCard;
