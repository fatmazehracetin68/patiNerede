import React from "react";
import { useNavigate } from "react-router-dom";
import ExampleLostAnimals from "./ExampleLostAnimals";

const LostAnimals = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-5 ">
      <div className="bg-[#EDE8DC] mt-10 p-5">
        <div className=" w-[80%] justify-center items-center mx-auto">
          <div>
            <h2 className="text-[#ff8a65] text-3xl text-bold text-center">KAYIP HAYVANLAR</h2>
          </div>
          <ExampleLostAnimals />
          <div className=" flex justify-center">
            <button
              onClick={() => navigate("/lost-animals")}
              className="bg-[#ff8a65] w-52 h-10 rounded-md "
            >
              Hepsini Göster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostAnimals;
