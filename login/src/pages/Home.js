import React from "react";
import LostAnimals from "../components/LostAnimals";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <LostAnimals />
      <Footer />
    </div>
  );
};

export default Home;
