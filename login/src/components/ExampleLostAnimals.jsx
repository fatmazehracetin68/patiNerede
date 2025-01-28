import React from "react";
import kara1 from "../assest/kara1.webp";
import boncuk1 from "../assest/boncuk1.jpg";
import kumru from "../assest/kumru.jpg";
import dumanCat from "../assest/dumanCat.jpeg";
import AnimalCard from "./AnimalCard";

const ExampleLostAnimals = () => {
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
      ilanBasligi: "Beyaz Kedi Kayboldu",
      hayvanIsmi: "Boncuk",
      cinsiyet: "Erkek",
      rengi: "Beyaz",
      turu: "köpek",
      kaybolduguIl: "Ankara",
      kayipTarihi: "2025-01-15",
      ilanAciklamasi: "Beyaz, uzun tüylü ve çok sakin bir kedidir. Çiftlik evimizden kayboldu.",
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
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default ExampleLostAnimals;
