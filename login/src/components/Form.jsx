import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    ilanBasligi: "",
    hayvanIsmi: "",
    cinsiyet: "",
    rengi: "",
    turu: "kedi",
    kaybolduguIl: "",
    kayipTarihi: "",
    ilanAciklamasi: "",
    resim: "",
    ad: "",
    soyad: "",
    telefon: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setFormData({ ...formData, resim: imageUrl });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Önceki ilanları al, yeni ilanı ekle
    const existingData = JSON.parse(localStorage.getItem("kayipIlanlari")) || [];
    localStorage.setItem("kayipIlanlari", JSON.stringify([...existingData, formData]));

    navigate("/kayiplar"); // Kayıp sayfasına yönlendir
  };

  const citys = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bartın",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Düzce",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Iğdır",
    "Isparta",
    "İstanbul",
    "İzmir",
    "Kahramanmaraş",
    "Karabük",
    "Karaman",
    "Kastamonu",
    "Kayseri",
    "Kırıkkale",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Şanlıurfa",
    "Şırnak",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Uşak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ];
  return (
    <div>
      <h2 className="text-[#31511E] text-xl my-5 text-center">TEMEL BİLGİLER</h2>
      <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%]">
          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">İlan Başlığı</label>
            <input
              name="ilanBasligi"
              onChange={handleChange}
              className="p-2 border-2 rounded-md"
              type="text"
            />
          </div>
          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">Hayvan İsmi</label>
            <input
              name="hayvanIsmi"
              onChange={handleChange}
              className="p-2 border-2 rounded-md"
              type="text"
            />
          </div>

          <div className="flex flex-col w-[80%] mt-4">
            <label className="font-bold my-2">Cinsiyet</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="cinsiyet"
                  value="dişi"
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
                Dişi
              </label>
              <label>
                <input
                  type="radio"
                  name="cinsiyet"
                  value="erkek"
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
                Erkek
              </label>
            </div>
          </div>

          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">Rengi</label>
            <input
              name="rengi"
              onChange={handleChange}
              className="p-2 border-2 rounded-md"
              type="text"
            />
          </div>

          <div className="flex flex-col w-[80%] mt-4">
            <label className="font-bold mb-2">Türü</label>
            <select name="turu" onChange={handleChange} className="border-2 rounded-md">
              <option value="kedi">Kedi</option>
              <option value="köpek">Köpek</option>
              <option value="kanatlı">Kanatlı</option>
              <option value="diğer">Diğer</option>
            </select>
          </div>

          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">Kaybolduğu İl</label>
            <select name="kaybolduguIl" onChange={handleChange} className="p-2 border-2 rounded-md">
              {citys.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">Kayıp Tarihi</label>
            <input
              name="kayipTarihi"
              onChange={handleChange}
              className="p-2 border-2 rounded-md"
              type="date"
            />
          </div>

          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2 ">İlan Açıklaması</label>
            <textarea
              name="ilanAciklamasi"
              onChange={handleChange}
              className="p-2 border-2 rounded-md"
            />
          </div>

          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">Resim Seçin</label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="imageUpload"
              onChange={handleImageChange}
            />
            <label
              htmlFor="imageUpload"
              className="w-80 h-10 p-2 rounded-md bg-[#ff8a65] text-white text-center cursor-pointer"
            >
              Resim Yükle
            </label>
          </div>

          {selectedImage && (
            <div className="mt-4 flex flex-col items-center">
              <p className="text-sm text-gray-500">Önizleme:</p>
              <img
                src={selectedImage}
                alt="Seçilen Resim"
                className="w-40 h-40 object-cover rounded-md shadow-md mt-2"
              />
            </div>
          )}
        </div>

        <h2 className="text-[#31511E] text-xl my-5 text-center">İLETİŞİM BİLGİLERİ</h2>

        <div className="flex flex-col w-[80%]">
          <label className="font-bold my-2">Adınız</label>
          <input
            name="ad"
            onChange={handleChange}
            className="p-2 border-2 rounded-md"
            type="text"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label className="font-bold my-2">Soyadınız</label>
          <input
            name="soyad"
            onChange={handleChange}
            className="p-2 border-2 rounded-md"
            type="text"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label className="font-bold my-2">Telefon Numaranız</label>
          <input
            name="telefon"
            onChange={handleChange}
            className="p-2 border-2 rounded-md"
            type="tel"
          />
        </div>

        <button type="submit" className="w-100 h-10 mt-5 p-2 rounded-md bg-[#ff8a65] text-white">
          KAYDET
        </button>
      </form>
    </div>
  );
};

export default Form;
