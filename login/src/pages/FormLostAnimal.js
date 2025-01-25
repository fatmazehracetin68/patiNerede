import React from "react";

const FormLostAnimal = () => {
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
    <div className="w-[80%]  mx-auto">
      <h1 className="text-[#ff8a65] text-3xl font-bold text-center my-10">KAYIP EKLEME FORMU</h1>
      <div className="bg-[#EDE8DC] my-10 p-5">
        <h3>
          Lütfen, kedi, köpek gibi kaybolan evcil hayvanınıza ait bilgileri detaylı olarak ilgili
          alanlara giriniz.
        </h3>
        <div>
          <h2 className="text-[#31511E] text-xl my-5 text-center">TEMEL BİLGİLER</h2>
          <form className=" flex flex-col justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-[80%]">
              <div className="flex flex-col w-[80%]">
                <label className="font-bold my-2">İlan Başlığı</label>
                <input
                  className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                  type="text"
                  id="name"
                />
              </div>
              <div className="flex flex-col w-[80%]">
                <label className="font-bold my-2">Hayvan İsmi</label>
                <input
                  className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                  type="text"
                  id="name"
                />
              </div>
              <div className="flex flex-col w-[80%] mt-4">
                <label className="font-bold my-2">Cinsiyet</label>
                <div className="flex space-x-4">
                  <div>
                    <input type="radio" id="dişi" name="cinsiyet" value="dişi" className="mr-2" />
                    <label htmlFor="dişi">Dişi</label>
                  </div>
                  <div>
                    <input type="radio" id="erkek" name="cinsiyet" value="erkek" className="mr-2" />
                    <label htmlFor="erkek">Erkek</label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[80%]">
                <label className="font-bold my-2">Rengi</label>
                <input
                  className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                  type="text"
                  id="color"
                />
              </div>
              <div className="flex flex-col w-[80%] mt-4">
                <label className="font-bold mb-2">Türü</label>
                <select
                  className="border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                  id="type"
                >
                  <option value="kedi">Kedi</option>
                  <option value="köpek">Köpek</option>
                  <option value="kanatlı">Kanatlı</option>
                  <option value="diğer">Diğer</option>
                </select>
              </div>

              <div className="flex flex-col w-[80%]">
                <label className="font-bold my-2">Kaybolduğu İl</label>
                <select
                  className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                  id="il"
                >
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
                  className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                  type="date"
                  id="dater"
                />
              </div>

              <div className="flex flex-col w-[80%]">
                <label className="font-bold my-2 ">İlan Açıklaması</label>
                <textarea
                  className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                  id="dater"
                />
              </div>
              <button className="w-80 h-10 mt-5 p-2 rounded-md bg-[#ff8a65] text-white">
                Resim Seçin
              </button>
            </div>
          </form>
          <h2 className="text-[#31511E] text-xl my-5 text-center">İLETİŞİM BİLGİLERİ</h2>
          <form className=" flex flex-col justify-center items-center">
            <div className="flex flex-col w-[80%]">
              <label className="font-bold my-2">Adınız</label>
              <input
                className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col w-[80%]">
              <label className="font-bold my-2">Soyadınız</label>
              <input
                className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                type="text"
                id="surname"
              />
            </div>
            <div className="flex flex-col w-[80%]">
              <label className="font-bold my-2">Telefon Numaranız</label>
              <input
                className="p-2 border-[#31511E] border-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#859F3D]"
                type="tel"
                id="tel"
              />
            </div>

            <button className=" w-100 h-10 mt-5 p-2 rounded-md bg-[#ff8a65] text-white ">
              KAYDET
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLostAnimal;
