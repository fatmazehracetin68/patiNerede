import React, { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import ExampleLostAnimals from "../components/ExampleLostAnimals";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Pet } from "iconsax-react";

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
    const fetchLostAnimals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "kayipIlanlari"));
        const animals = querySnapshot.docs.map((doc) => doc.data());
        setLost(animals);
      } catch (error) {
        console.error("Error fetching lost animals:", error);
      }
    };

    fetchLostAnimals();
  }, []);

  return (
    <div className="p-4 my-28 md:mx-20 lg:mx-32 xl:mx-48">
      <div className=" my-5 flex items-start space-x-2">
        <Pet size="28" color="#37d67a" />
        <h1 className="mt-1">
          Sahiplerinin kaybettiği ve kavuşmak istediği hayvanlar burada listelenmektedir.
        </h1>
      </div>
      <ExampleLostAnimals openModal={openModal} closeModal={closeModal} />
      {lost.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {lost.map((ilan, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedAnimal(ilan);
                setIsModalOpen(true);
              }}
            >
              <AnimalCard animal={ilan} />
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
              className="w-full h-40 object-cover rounded-md "
            />
            <h3 className="text-2xl font-bold text-center mt-2 ">{selectedAnimal.ilanBasligi}</h3>
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
                <strong>Kayıp Tarihi:</strong>{" "}
                {selectedAnimal.kayipTarihi
                  ? new Date(selectedAnimal.kayipTarihi.seconds * 1000).toLocaleDateString("tr-TR")
                  : "Bilinmiyor"}
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
