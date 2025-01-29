import React from "react";
import catImage from "../assest/images.jpeg";
import { Pet } from "iconsax-react";

const Main = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row justify-center items-center p-10 bg-[#859F3D]">
        <h1 className="text-[25px] text-center mr-10 sm:text-[50px]">
          Kaybolan hayvan dostlarımızı <br /> yuvalarına kavuşturalım
        </h1>
        <img src={catImage} alt="" className="w-30 h-30 rounded-full" />
      </div>
      <div className="p-10 ">
        <h1 className="font-bold my-5">Biz Kimiz?</h1>
        <p className="text-lg text-[#333]">
          Biz, kaybolan hayvanların yuvalarına kavuşmasına yardımcı olmayı hedefleyen bir
          platformuz. Amacımız, kaybolan hayvanları bulmak ve onları sahiplerine geri
          kazandırmaktır. Her zaman bir adım daha atarak, kaybolan dostlarımızın evlerine dönmesini
          sağlamaya çalışıyoruz.
        </p>
        <h1 className="font-bold my-5">Ne yapabilirsiniz?</h1>
        <div className="flex items-start space-x-2 ">
          <Pet size="28" color="#37d67a" />

          <p className="text-lg text-[#333]">
            Kaybolan bir dostunuz varsa, burada kaybolan hayvanın bilgilerini girerek diğer
            kullanıcıların bu konuda size yardımcı olmasına olanak tanıyabilirsiniz.
          </p>
        </div>
        <div className="flex items-start space-x-2 mt-5">
          <Pet size="28" color="#37d67a" />
          <p className="text-lg text-[#333]">
            Eğer bir kayıp hayvan bulduysanız, bu bölüme kaybolan hayvan hakkında bilgileri
            ekleyerek sahibine geri dönmesi için yardımcı olabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
