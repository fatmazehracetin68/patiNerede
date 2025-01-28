import React from "react";
import LostAnimals from "../components/LostAnimals";
import Main from "../components/Main";
import HomeReturn from "../components/HomeReturn";
import { ArrowRight, Pet } from "iconsax-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="py-28">
      <Main />
      <LostAnimals />
      <HomeReturn />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full  bg-[#EDE8DC] px-10 py-10">
          <div className="flex justify-start items-center">
            <div className="flex flex-row ">
              <Pet size="40" color="#FF8A65" />
              <h1 className="px-3 text-xl mt-2 font-bold">Evcil Hayvanım Kayboldu</h1>
            </div>
            <div className="flex">
              <ArrowRight size="32" color="#FF8A65" />
              <ArrowRight size="32" color="#FF8A65" />
              <ArrowRight size="32" color="#FF8A65" />
              <ArrowRight size="32" color="#FF8A65" />
            </div>
            <button
              onClick={() => navigate("/form-lost-animal")}
              className="w-200 bg-[#ff8a65] p-3 mx-5 rounded-md"
            >
              Başvuru Formu
            </button>
          </div>
        </div>

        <div className="w-full  bg-[#31511E] px-10 py-10 ">
          <div className="flex justify-start items-center">
            <div className="flex flex-row ">
              <Pet size="40" color="#FF8A65" />
              <h1 className="px-3 text-xl mt-2 font-bold text-[#EDE8DC]">Evcil Hayvan Buldum</h1>
            </div>
            <div className="flex">
              <ArrowRight size="32" color="#FF8A65" />
              <ArrowRight size="32" color="#FF8A65" />
              <ArrowRight size="32" color="#FF8A65" />
              <ArrowRight size="32" color="#FF8A65" />
            </div>
            <button
              onClick={() => navigate("/finding-animal-form")}
              className="w-200 bg-[#EDE8DC] p-3 mx-5 rounded-md"
            >
              Başvuru Formu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
