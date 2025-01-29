import blackCat from "../assest/black-cat.webp";
import boncuk from "../assest/boncuk.jpeg";
import max from "../assest/max.webp";
import dumanCat from "../assest/dumanCat.jpeg";
import sakir from "../assest/sakir.jpeg";
import AnimalCard from "../components/AnimalCard";

const FoundAnimals = () => {
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
      resim: blackCat,
      ad: "Ahmet",
      soyad: "Yılmaz",
      telefon: "0532XXXXXXX",
      id: 1,
    },
    {
      ilanBasligi: "Beyaz Kedi Kayboldu",
      hayvanIsmi: "Boncuk",
      cinsiyet: "Erkek",
      rengi: "Beyaz",
      turu: "köpek",
      kaybolduguIl: "Ankara",
      kayipTarihi: "2025-01-15",
      ilanAciklamasi:
        "Beyaz, kıvırcık tüylü ve çok sakin bir köpektir. Çiftlik evimizden kayboldu.",
      resim: boncuk,
      ad: "Merve",
      soyad: "Kaya",
      telefon: "0543XXXXXXX",
      id: 2,
    },
    {
      ilanBasligi: "Max Kayboldu",
      hayvanIsmi: "Max",
      cinsiyet: "Dişi",
      rengi: "Kumral",
      turu: "köpek",
      kaybolduguIl: "İzmir",
      kayipTarihi: "2025-01-12",
      ilanAciklamasi:
        "max, evde çok sevilen ve her zaman etrafımızda olan bir köpekti. Çalışmaya giderken kayboldu.",
      resim: max,
      ad: "Mehmet",
      soyad: "Demir",
      telefon: "0551XXXXXXX",
      id: 3,
    },

    {
      ilanBasligi: "Gümüş Kedi Kayboldu",
      hayvanIsmi: "Gümüş",
      cinsiyet: "Erkek",
      rengi: "Gümüş gri",
      turu: "kedi",
      kaybolduguIl: "Bursa",
      kayipTarihi: "2025-01-20",
      ilanAciklamasi: "Gümüş, bahçede oynarken kayboldu. Yavru kedi, çok arkadaş canlısıdır.",
      resim: dumanCat,
      ad: "Selin",
      soyad: "Çelik",
      telefon: "0553XXXXXXX",
      id: 4,
    },
    {
      ilanBasligi: "Papağanımız Kayboldu",
      hayvanIsmi: "Şakir",
      cinsiyet: "Erkek",
      rengi: "Limon sarı",
      turu: "kanatlı",
      kaybolduguIl: "Aksaray",
      kayipTarihi: "2025-01-20",
      ilanAciklamasi: "Cam açıkken kaçtı, ismini biliyor seslenince bakar.",
      resim: sakir,
      ad: "Fatma",
      soyad: "Çetin",
      telefon: "05531234567",
      id: 5,
    },
  ];
  return (
    <div className="mt-36 mx-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} isFound={true} />
        ))}
      </div>
    </div>
  );
};

export default FoundAnimals;
