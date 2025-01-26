import React from "react";
import Form from "../components/Form";
import backgroundImage from "../assest/background.jpeg";

const FormLostAnimal = () => {
  return (
    <div className="w-full p-5 bg-cover bg-center">
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.15,
          zIndex: -1,
        }}
      ></div>

      <div className="w-[80%]  mx-auto  pt-28 ">
        <h1 className="text-[#ff8a65] text-3xl font-bold text-center mt-9">KAYIP EKLEME FORMU</h1>
        <div className=" my-10 p-5">
          <h3 className="text-center mb-8">
            Lütfen, kedi, köpek gibi kaybolan evcil hayvanınıza ait bilgileri detaylı olarak ilgili
            alanlara giriniz.
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormLostAnimal;
