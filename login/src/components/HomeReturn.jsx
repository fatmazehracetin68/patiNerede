import React from "react";
import AnimalCard from "./AnimalCard";
import blackCat from "../assest/black-cat.webp";
import boncuk from "../assest/boncuk.jpeg";
import max from "../assest/max.webp";
import dumanCat from "../assest/dumanCat.jpeg";
import { useNavigate } from "react-router-dom";

const HomeReturn = () => {
  const navigate = useNavigate();
  const animals = [
    {
      ilanBasligi: "Kara Kayboldu",
      hayvanIsmi: "Kömür",
      cinsiyet: "Dişi",
      rengi: "Siyah",
      turu: "kedi",
      kaybolduguIl: "İstanbul",
      kayipTarihi: "2025-01-10",
      ilanAciklamasi: "Kömür, siyah tüyleriyle tanınır. Bir hafta önce evden kayboldu.",
      resim: blackCat,
      ad: "Ahmet",
      soyad: "Yılmaz",
      telefon: "05321234567",
      id: 1,
    },
    {
      ilanBasligi: "Pamuk Kedi Kayboldu",
      hayvanIsmi: "Pamuk",
      cinsiyet: "Erkek",
      rengi: "Beyaz",
      turu: "köpek",
      kaybolduguIl: "Ankara",
      kayipTarihi: "2025-01-15",
      ilanAciklamasi: "Pamuk, uzun tüylü ve çok sakin bir kedidir. Çiftlik evimizden kayboldu.",
      resim: boncuk,
      ad: "Merve",
      soyad: "Kaya",
      telefon: "05434567892",
      id: 2,
    },
    {
      ilanBasligi: "Toprak Kayboldu",
      hayvanIsmi: "Toprak",
      cinsiyet: "Dişi",
      rengi: "Kumral",
      turu: "kedi",
      kaybolduguIl: "İzmir",
      kayipTarihi: "2025-01-12",
      ilanAciklamasi:
        "Toprak, evde çok sevilen ve her zaman etrafımızda olan bir kediydi. Çalışmaya giderken kayboldu.",
      resim: max,
      ad: "Mehmet",
      soyad: "Demir",
      telefon: "05510987654",
      id: 3,
    },

    {
      ilanBasligi: "Silver Kedi Kayboldu",
      hayvanIsmi: "Silver",
      cinsiyet: "Erkek",
      rengi: "Gümüş gri",
      turu: "kedi",
      kaybolduguIl: "Bursa",
      kayipTarihi: "2025-01-20",
      ilanAciklamasi:
        "Silver, genellikle bahçede oynarken kayboldu. Yavru kedi, çok arkadaş canlısıdır.",
      resim: dumanCat,
      ad: "Selin",
      soyad: "Çelik",
      telefon: "05539876543",
      id: 4,
    },
  ];
  return (
    <div className="bg-[#31511E] my-10 p-5">
      <div className=" w-[80%] justify-center items-center mx-auto">
        <div>
          <h2 className="text-[#F6FCDF] text-3xl text-bold text-center">YUVASINA KAVUŞANLAR</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} isFound={true} />
          ))}
        </div>

        <div className=" flex justify-center">
          <button
            onClick={() => navigate("/found-animals")}
            className="bg-[#F6FCDF] w-52 h-10 rounded-md "
          >
            Hepsini Göster
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeReturn;
