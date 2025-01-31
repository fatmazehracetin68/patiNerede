import React, { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import { db } from "../firebase";
import { Pet } from "iconsax-react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const FindingAnimal = () => {
  const [lost, setLost] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const findingAnimals = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bulunanHayvanlar"));
        const animals = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setLost(animals);
      } catch (error) {
        console.error("Error fetching lost animals:", error);
      }
    };

    findingAnimals();
  }, []);

  const markAsFound = async (animal) => {
    try {
      await addDoc(collection(db, "yuvasinaKavusanlar"), animal);

      const animalRef = doc(db, "bulunanHayvanlar", animal.id);
      await deleteDoc(animalRef);

      // Güncellenmiş veriyi state'e yansıt
      setLost((prevLost) => prevLost.filter((item) => item.id !== animal.id));

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error marking animal as found:", error);
    }
  };

  return (
    <div className="p-4 my-28 md:mx-20 lg:mx-32 xl:mx-48">
      <div className=" my-5 flex items-start space-x-2">
        <Pet size="28" color="#37d67a" />
        <h1 className="mt-1">
          Duyarlı vatandaşlar tarafından bulunan ve sahibine kavuşturulmak istenen hayvanlar burada
          listelenmektedir.
        </h1>
      </div>
      {lost.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
          {lost.map((ilan, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
            >
              <AnimalCard animal={ilan} />

              <button
                className="bg-[#859F3D] text-white p-2 rounded-md mt-2 w-full"
                onClick={() => markAsFound(ilan)}
              >
                Sahibi Bulunduysa İşaretle
              </button>

              <button
                className="bg-blue-500 text-white p-2 rounded-md mt-2 w-full"
                onClick={() => {
                  setSelectedAnimal(ilan);
                  setIsModalOpen(true);
                }}
              >
                Detayları Gör
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Henüz kaybolmuş hayvan bulunmamaktadır.</p>
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

export default FindingAnimal;
