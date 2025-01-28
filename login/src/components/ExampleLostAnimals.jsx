import React from "react";
import kara1 from "../assest/kara1.webp";
import boncuk1 from "../assest/boncuk1.jpg";
import kumru from "../assest/kumru.jpg";
import dumanCat from "../assest/dumanCat.jpeg";
import AnimalCard from "./AnimalCard";

const ExampleLostAnimals = ({ openModal, isModalOpen, selectedAnimal, closeModal }) => {
  const animals = [
    {
      ilanBasligi: "Kara Kayboldu",
      hayvanIsmi: "Kara",
      cinsiyet: "Dişi",
      rengi: "Siyah",
      turu: "kedi",
      kaybolduguIl: "İstanbul",
      kayipTarihi: "2025-01-10",
      ilanAciklamasi: "Kara, siyah tüyleriyle tanınır. Bir hafta önce evden kayboldu.",
      resim: kara1,
      ad: "Ahmet",
      soyad: "Yılmaz",
      telefon: "0532XXXXXXX",
      id: 1,
    },

    {
      ilanBasligi: "Kumru Kayboldu",
      hayvanIsmi: "Kumru",
      cinsiyet: "Dişi",
      rengi: "Kumral",
      turu: "kedi",
      kaybolduguIl: "İzmir",
      kayipTarihi: "2025-01-12",
      ilanAciklamasi:
        "Kumru, evde çok sevilen ve her zaman etrafımızda olan bir köpek. Çalışmaya giderken kayboldu.",
      resim: kumru,
      ad: "Mehmet",
      soyad: "Demir",
      telefon: "0551XXXXXXX",
      id: 2,
    },

    {
      ilanBasligi: "Gümüş Kedi Kayboldu",
      hayvanIsmi: "Gümüş",
      cinsiyet: "Erkek",
      rengi: "Gümüş gri",
      turu: "kedi",
      kaybolduguIl: "Bursa",
      kayipTarihi: "2025-01-20",
      ilanAciklamasi:
        "Gümüş, genellikle bahçede oynarken kayboldu. Yavru kedi, çok arkadaş canlısıdır.",
      resim: dumanCat,
      ad: "Selin",
      soyad: "Çelik",
      telefon: "0553XXXXXXX",
      id: 3,
    },
    {
      ilanBasligi: "Boncuk Köpek Kayboldu",
      hayvanIsmi: "Boncuk",
      cinsiyet: "Erkek",
      rengi: "Beyaz",
      turu: "köpek",
      kaybolduguIl: "Ankara",
      kayipTarihi: "2025-01-15",
      ilanAciklamasi: "Beyaz, uzun tüylü ve çok sakin bir köpektir. Çiftlik evimizden kayboldu.",
      resim: boncuk1,
      ad: "Merve",
      soyad: "Kaya",
      telefon: "0543XXXXXXX",
      id: 4,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            openModal={() => openModal(animal)}
            closeModal={closeModal}
          />
        ))}
      </div>
      {/* Modal */}
      {isModalOpen && selectedAnimal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={closeModal} // Modal'ı kapatmak için
            >
              ✖
            </button>

            <img
              src={selectedAnimal.resim}
              alt={selectedAnimal.hayvanIsmi}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-2xl font-bold text-center mt-2">{selectedAnimal.hayvanIsmi}</h3>
            <p className="text-center text-gray-700">{selectedAnimal.kaybolduguIl}</p>
            <p className="mt-2 text-sm text-gray-600">{selectedAnimal.ilanAciklamasi}</p>
            <p className="mt-2 text-sm text-gray-600">Telefon: {selectedAnimal.telefon}</p>
            <p className="mt-2 text-sm text-gray-600">Cinsiyet: {selectedAnimal.cinsiyet}</p>
            <p className="mt-2 text-sm text-gray-600">
              Sahibi: {selectedAnimal.ad} {selectedAnimal.soyad}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleLostAnimals;
