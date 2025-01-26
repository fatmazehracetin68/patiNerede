import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const KayıpSayfası = () => {
  const [kayiplar, setKayiplar] = useState([]);

  useEffect(() => {
    // localStorage'dan kaybolan ilanları al
    const savedKayiplar = JSON.parse(localStorage.getItem("kayipIlanlari")) || [];
    setKayiplar(savedKayiplar);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-[#31511E] text-xl my-5 text-center">Kayıp İlanları</h2>

      {kayiplar.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {kayiplar.map((ilan, index) => (
            <div key={index} className="border p-4 rounded-md shadow-md">
              <h3 className="font-bold text-lg">{ilan.ilanBasligi}</h3>
              <p className="text-gray-600">Hayvan İsmi: {ilan.hayvanIsmi}</p>
              <p className="text-gray-600">Cinsiyet: {ilan.cinsiyet}</p>
              <p className="text-gray-600">Tür: {ilan.turu}</p>
              <p className="text-gray-600">Kaybolduğu İl: {ilan.kaybolduguIl}</p>
              <p className="text-gray-600">Kayıp Tarihi: {ilan.kayipTarihi}</p>
              <p className="text-gray-600">Açıklama: {ilan.ilanAciklamasi}</p>
              <div className="mt-4">
                {ilan.resim && (
                  <img
                    src={ilan.resim}
                    alt="İlan Resmi"
                    className="w-[50%] h-40 object-cover rounded-md"
                  />
                )}
              </div>
              <Link to="/" className="mt-4 block text-center text-[#ff8a65] font-bold">
                Detaylar
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Henüz kayıp ilanı bulunmamaktadır.</p>
      )}
    </div>
  );
};

export default KayıpSayfası;
