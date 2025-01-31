import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Timestamp } from "firebase/firestore";

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

const Form = ({ pageType }) => {
  const schema = yup.object().shape({
    ilanBasligi: yup.string().required("İlan başlığı zorunludur"),
    kaybolduguIl: yup.string().required("Kaybolduğu il zorunludur"),
    hayvanIsmi: yup.string().required("Hayvan ismi zorunludur"),
    telefon: yup
      .string()
      .matches(/^[0-9]{11}$/, "Geçerli bir telefon numarası girin")
      .required("Telefon numarası zorunludur"),
    ad: yup.string().required("İsminizi yazınız"),
    soyad: yup.string().required("Soyadınızı yazınız"),
    turu: yup.string().required("Tür seçimi zorunludur"),
  });

  const [formErrors, setFormErrors] = useState({
    ilanBasligi: "",
    hayvanIsmi: "",
    telefon: "",
    kaybolduguIl: "",
    ad: "",
    soyad: "",
    turu: "",
  });

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

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

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); // Base64 string döner
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Önizleme için
      const base64String = await convertToBase64(file); // Resmi Base64 formatına dönüştür
      setFormData({ ...formData, resim: base64String }); // Base64 string'i formData'ya kaydet
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const collectionName = pageType === "lostAnimal" ? "kayipIlanlari" : "bulunanHayvanlar";
      // Form verilerini doğrula
      await schema.validate(formData, { abortEarly: false });

      const docRef = await addDoc(collection(db, collectionName), {
        ilanBasligi: formData.ilanBasligi,
        hayvanIsmi: formData.hayvanIsmi,
        cinsiyet: formData.cinsiyet,
        rengi: formData.rengi,
        turu: formData.turu,
        kaybolduguIl: formData.kaybolduguIl,
        kayipTarihi: Timestamp.fromDate(new Date(formData.kayipTarihi)),
        ilanAciklamasi: formData.ilanAciklamasi,
        resim: formData.resim,
        ad: formData.ad,
        soyad: formData.soyad,
        telefon: formData.telefon,
      });

      console.log("Yeni ilan Firestore'a kaydedildi: ", docRef.id);
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate(pageType === "lostAnimal" ? "/lost-animals" : "/finding-animal");
      }, 5000);
    } catch (err) {
      const newFormErrors = {};
      if (err?.inner?.length) {
        err.inner.forEach((error) => {
          newFormErrors[error.path] = error.message;
        });
      } else {
        newFormErrors.general = "Beklenmedik bir hata oluştu, lütfen tekrar deneyin.";
      }

      setFormErrors(newFormErrors);
    }
  };

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
            {formErrors.ilanBasligi && (
              <p className="text-red-500 text-sm">{formErrors.ilanBasligi}</p>
            )}
          </div>

          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">Hayvan İsmi</label>
            <input
              type="text"
              name="hayvanIsmi"
              value={formData.hayvanIsmi}
              onChange={handleChange}
              placeholder="Hayvan ismi"
              className="p-2 border-2 rounded-md"
            />
            {formErrors.hayvanIsmi && (
              <p className="text-red-500 text-sm">{formErrors.hayvanIsmi}</p>
            )}
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
                />
                Dişi
              </label>
              <label>
                <input
                  type="radio"
                  name="cinsiyet"
                  value="erkek"
                  onChange={handleChange}
                  className="mr-2"
                />
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
              <option value="">Seçiniz</option>
              <option value="kedi">Kedi</option>
              <option value="köpek">Köpek</option>
              <option value="kanatlı">Kanatlı</option>
              <option value="diğer">Diğer</option>
            </select>
            {formErrors.turu && <p className="text-red-500 text-sm">{formErrors.turu}</p>}
          </div>

          <div className="flex flex-col w-[80%]">
            <label className="font-bold my-2">Kaybolduğu İl</label>
            <select name="kaybolduguIl" onChange={handleChange} className="p-2 border-2 rounded-md">
              <option value="">Seçiniz</option>
              {citys.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {formErrors.kaybolduguIl && (
              <p className="text-red-500 text-sm">{formErrors.kaybolduguIl}</p>
            )}
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
            type="text"
            name="ad"
            value={formData.ad}
            onChange={handleChange}
            placeholder="Adınız"
            className="p-2 border-2 rounded-md"
          />
          {formErrors.ad && <p className="text-red-500 text-sm">{formErrors.ad}</p>}
        </div>
        <div className="flex flex-col w-[80%]">
          <label className="font-bold my-2">Soyadınız</label>
          <input
            type="text"
            name="soyad"
            value={formData.soyad}
            onChange={handleChange}
            placeholder="Soyadınız"
            className="p-2 border-2 rounded-md"
          />
          {formErrors.soyad && <p className="text-red-500 text-sm">{formErrors.soyad}</p>}
        </div>
        <div className="flex flex-col w-[80%]">
          <label className="font-bold my-2">Telefon</label>
          <input
            type="text"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            placeholder="Telefon Numaranızı Giriniz"
            className="p-2 border-2 rounded-md"
          />
          {formErrors.telefon && <p className="text-red-500 text-sm">{formErrors.telefon}</p>}
        </div>

        <div className="flex justify-center w-[80%] mt-4">
          <button type="submit" className="w-full py-2 bg-[#31511E] text-white rounded-md">
            İlanı Gönder
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold text-green-600">Başarıyla Kaydedildi!</h2>
            <p className="text-gray-600 mt-2">İlanınız başarıyla kaydedildi.</p>
            <button
              onClick={() => {
                navigate("/finding-animal");
              }}
              className="mt-4 bg-[#ff8a65] text-white px-4 py-2 rounded-md"
            >
              Tamam
            </button>
          </div>
        </div>
      )}
      {formErrors.length > 0 && (
        <div className="text-red-500 mt-2">
          <ul>
            {formErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Form;
