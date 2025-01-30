import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormLostAnimal from "./pages/FormLostAnimal";
import FindingAnimalForm from "./pages/FindingAnimalForm";
import LostAnimalPages from "./pages/LostAnimalPages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeReturnAnimals from "./pages/HomeReturnAnimals";
import FindingAnimal from "./pages/FindingAnimal";

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-lost-animal" element={<FormLostAnimal />} />
        <Route path="/finding-animal" element={<FindingAnimal />} />
        <Route path="/finding-animal-form" element={<FindingAnimalForm />} />
        <Route path="/lost-animals" element={<LostAnimalPages />} />
        <Route path="/homeReturn-aimals" element={<HomeReturnAnimals />} />
      </Routes>
      <Footer />
    </Router>
  );
};
