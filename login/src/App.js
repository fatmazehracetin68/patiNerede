import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LostAnimals from "./components/LostAnimals";

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <LostAnimals />
      <Footer />
    </div>
  );
};
